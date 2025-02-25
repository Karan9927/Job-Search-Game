"use client";

import confetti from "canvas-confetti";

export const launchConfetti = () => {
  confetti({
    particleCount: 300,
    spread: 90,
    origin: { x: 1, y: 1 },
  });
  confetti({
    particleCount: 300,
    spread: 90,
    origin: { x: 0, y: 1 },
  });
};
