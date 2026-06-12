"use client";

import { useCallback, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
const SCRAMBLES_PER_LETTER = 3;
const MS_PER_SCRAMBLE = 14;

type ScrambleChar = { char: string; resolved: boolean };

function nextResolvableIndex(chars: string[], from: number): number {
  let i = from;
  while (i < chars.length && (chars[i] === " " || chars[i] === "\n")) i++;
  return i;
}

export function useTextScramble(original: string) {
  const [display, setDisplay] = useState<ScrambleChar[]>(
    original.split("").map((c) => ({ char: c, resolved: true }))
  );
  const runningRef = useRef(false);

  const scramble = useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;

    const chars = original.split("");
    const resolved = chars.map((c) => c === " " || c === "\n"); // whitespace pre-resolved
    const counters = new Array(chars.length).fill(0);

    let letterIndex = nextResolvableIndex(chars, 0);

    const tick = () => {
      let allDone = true;

      const next: ScrambleChar[] = chars.map((ch, i) => {
        if (ch === " " || ch === "\n") return { char: ch, resolved: true };
        if (resolved[i]) return { char: ch, resolved: true };

        allDone = false;

        if (i <= letterIndex) {
          counters[i]++;
          if (counters[i] >= SCRAMBLES_PER_LETTER) {
            resolved[i] = true;
            // Advance letterIndex past any whitespace
            if (letterIndex === i) {
              letterIndex = nextResolvableIndex(chars, i + 1);
            }
            return { char: ch, resolved: true };
          }
          return { char: CHARS[Math.floor(Math.random() * CHARS.length)], resolved: false };
        }

        return { char: CHARS[Math.floor(Math.random() * CHARS.length)], resolved: false };
      });

      setDisplay(next);

      if (!allDone) {
        requestAnimationFrame(() => setTimeout(tick, MS_PER_SCRAMBLE));
      } else {
        runningRef.current = false;
      }
    };

    tick();
  }, [original]);

  return { display, scramble };
}
