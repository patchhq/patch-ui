"use client";

import { useEffect, useState } from "react";

const WORD = "patch";
const TYPE_MS = 200;
const DELETE_MS = 150;
const HOLD_MS = 2200;
const EMPTY_MS = 300;

export function HeroTitle() {
  const [text, setText] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setText(WORD);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    function type(cb: () => void) {
      let n = 0;
      function step() {
        if (cancelled) return;
        setText(WORD.slice(0, n));
        n++;
        if (n <= WORD.length) timer = setTimeout(step, TYPE_MS);
        else timer = setTimeout(cb, HOLD_MS);
      }
      step();
    }

    function erase(cb: () => void) {
      let n = WORD.length;
      function step() {
        if (cancelled) return;
        setText(WORD.slice(0, n));
        n--;
        if (n >= 0) timer = setTimeout(step, DELETE_MS);
        else timer = setTimeout(cb, EMPTY_MS);
      }
      step();
    }

    function loop() {
      type(() => {
        erase(loop);
      });
    }

    loop();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <h1 className="animate-rise" aria-label="patch">
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </h1>
  );
}
