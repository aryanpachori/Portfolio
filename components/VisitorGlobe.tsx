"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import GlobeWrapper from "./GlobeWrapper";
import { COUNTRY_CENTROIDS } from "@/data/countryCentroids";

interface VisitorData {
  country_code: string;
  country_name: string;
  count: number;
}

interface VisitorPoint {
  lat: number;
  lng: number;
  count: number;
  country: string;
  size: number;
  color: string;
}

export default function VisitorGlobe() {
  const globeEl = useRef<any>(null);
  const [hexData, setHexData] = useState<any[]>([]);
  const [visitorPoints, setVisitorPoints] = useState<VisitorPoint[]>([]);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [ready, setReady] = useState(false);

  // Geo data for hex polygons
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((r) => r.json())
      .then((data) => setHexData(data.features))
      .catch(() => {});
  }, []);

  // Visitor data
  useEffect(() => {
    fetch("/api/visitor")
      .then((r) => r.json())
      .then((data: VisitorData[]) => {
        const points: VisitorPoint[] = (Array.isArray(data) ? data : [])
          .filter((v) => COUNTRY_CENTROIDS[v.country_code])
          .map((v) => ({
            lat: COUNTRY_CENTROIDS[v.country_code][0],
            lng: COUNTRY_CENTROIDS[v.country_code][1],
            count: v.count,
            country: v.country_code,
            size: Math.min(0.8, 0.3 + v.count * 0.05),
            color: v.country_code === "IN" ? "#DFD0B8" : "#948979",
          }));
        // Always show India as a home base dot
        if (!points.find((p) => p.country === "IN")) {
          points.push({
            lat: 20.5937,
            lng: 78.9629,
            count: 0,
            country: "IN",
            size: 0.5,
            color: "#DFD0B8",
          });
        }
        setVisitorPoints(points);
        setTotalVisitors(
          (Array.isArray(data) ? data : []).reduce((s, v) => s + v.count, 0)
        );
      })
      .catch(() => {
        setVisitorPoints([
          {
            lat: 20.5937,
            lng: 78.9629,
            count: 0,
            country: "IN",
            size: 0.5,
            color: "#DFD0B8",
          },
        ]);
      });
  }, []);

  const handleGlobeReady = useCallback(() => {
    if (!globeEl.current) return;
    globeEl.current.pointOfView({ lat: 20, lng: 78, altitude: 1.8 }, 0);
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enableZoom = false;
    controls.enablePan = false;
    setReady(true);
  }, []);

  const hexColor = useCallback(
    (d: any) => {
      const iso = d.properties?.ISO_A2;
      const isVisited = visitorPoints.some((v) => v.country === iso);
      return isVisited ? "rgba(148,137,121,0.85)" : "rgba(57,62,70,0.6)";
    },
    [visitorPoints]
  );

  const hexLabel = useCallback(
    (d: any) => {
      const iso = d.properties?.ISO_A2;
      const visitor = visitorPoints.find((v) => v.country === iso);
      if (!visitor || visitor.count === 0) return "";
      return `<div style="background:#222831;border:1px solid #393E46;padding:4px 10px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#DFD0B8">${d.properties.NAME}: ${visitor.count} visit${visitor.count > 1 ? "s" : ""}</div>`;
    },
    [visitorPoints]
  );

  const ringColor = useCallback(
    () => (t: number) => `rgba(148,137,121,${1 - t})`,
    []
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "0.2em",
          color: "var(--text-muted)",
          marginBottom: "14px",
          textTransform: "uppercase",
        }}
      >
        Visitors From
      </p>

      <div
        className="globe-container"
        style={{
          width: 300,
          height: 300,
          opacity: ready ? 1 : 0.3,
          transition: "opacity 0.8s ease",
        }}
        onMouseEnter={() => {
          if (globeEl.current) globeEl.current.controls().autoRotate = false;
        }}
        onMouseLeave={() => {
          if (globeEl.current) globeEl.current.controls().autoRotate = true;
        }}
      >
        <GlobeWrapper
          ref={globeEl}
          width={300}
          height={300}
          onGlobeReady={handleGlobeReady}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={true}
          atmosphereColor="#948979"
          atmosphereAltitude={0.1}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          hexPolygonsData={hexData}
          hexPolygonResolution={3}
          hexPolygonMargin={0.4}
          hexPolygonColor={hexColor}
          hexPolygonLabel={hexLabel}
          ringsData={visitorPoints.filter((v) => v.count > 0)}
          ringLat="lat"
          ringLng="lng"
          ringMaxRadius={3}
          ringPropagationSpeed={1}
          ringRepeatPeriod={1500}
          ringColor={ringColor}
          ringAltitude={0.005}
        />
      </div>

      {totalVisitors > 0 && (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginTop: "12px",
            textAlign: "center",
          }}
        >
          {totalVisitors.toLocaleString()}{" "}
          <span style={{ color: "var(--accent)" }}>engineers</span> worldwide
        </p>
      )}
    </div>
  );
}
