"use client";

import { useEffect, useState } from "react";

const LINES = [
  "await openai.chat.completions.create({ messages })",
  "await openai.responses.create({ input: messages })",
];

const TYPE_MS = 34;
const DELETE_MS = 18;
const HOLD_MS = 1500;

export function PatchDemo() {
  const [text, setText] = useState("");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setText(LINES[LINES.length - 1]);
      return;
    }

    let cancelled = false;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    function type(str: string, cb: () => void) {
      let n = 0;
      function step() {
        if (cancelled) return;
        setText(str.slice(0, n));
        n++;
        if (n <= str.length) timer = setTimeout(step, TYPE_MS);
        else timer = setTimeout(cb, HOLD_MS);
      }
      step();
    }

    function erase(str: string, cb: () => void) {
      let n = str.length;
      function step() {
        if (cancelled) return;
        setText(str.slice(0, n));
        n--;
        if (n >= 0) timer = setTimeout(step, DELETE_MS);
        else timer = setTimeout(cb, 250);
      }
      step();
    }

    function loop() {
      type(LINES[i], () => {
        erase(LINES[i], () => {
          i = (i + 1) % LINES.length;
          loop();
        });
      });
    }

    loop();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="patch-demo" aria-live={reduced ? "off" : "polite"}>
      <span>{text}</span>
      <span className="cur" aria-hidden="true" />
    </div>
  );
}
