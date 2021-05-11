import React, { useEffect } from "react";
import { useState } from "react";

const UPDATE_INTERVAL = 3000 / 100; // 3000ms total time / 100ms == update interval
const UPDATE_AMOUNT = 100 / UPDATE_INTERVAL;

type Props = {
  shouldAnimate: boolean;
  doneAnimating: () => void;
};

export default function ProgressBar({ shouldAnimate, doneAnimating }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      if (progress < 100) {
        setTimeout(() => {
          setProgress(progress + UPDATE_AMOUNT);
        }, UPDATE_INTERVAL);
      } else {
        doneAnimating();
      }
    }
  });

  return <progress value={progress} max="100"></progress>;
}
