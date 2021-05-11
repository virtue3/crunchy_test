import React, { useEffect } from "react";
import { useState } from "react";

type Props = {
  shouldAnimate: boolean;
  doneAnimating: () => void;
};

export default function ProgressBar({ shouldAnimate, doneAnimating }: Props) {
  let timeoutHandle: NodeJS.Timeout;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      if (progress < 100) {
        setTimeout(() => {
          setProgress(progress + 100 / 30);
        }, 100);
      } else {
        doneAnimating();
      }
    }
  });

  return <progress value={progress} max="100"></progress>;
}
