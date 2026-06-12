"use client";

import dynamic from "next/dynamic";

const GlobeWrapper = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          width: 300,
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="globe-loader" />
      </div>
    ),
  }
);

export default GlobeWrapper;
