import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ProgressBar from "./progressBar";
import { useState, ReactElement } from "react";

let animationIndex = 0;

function App() {
  const [progressBars, setProgressBars] = useState<ReactElement[]>([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log("setting array for progress bars", progressBars.length);
          setProgressBars([
            ...progressBars,
            <div key={progressBars.length + 1}>
              <ProgressBar
                shouldAnimate={false}
                doneAnimating={() => {
                  setAnimationIndex(animationIndex + 1);
                }}
              />
            </div>,
          ]);
        }}
      >
        <p>Button</p>
      </button>

      {progressBars.map((progressBar, index) => {
        if (index === animationIndex) {
          return (
            <div key={progressBar.key}>
              <ProgressBar
                shouldAnimate={true}
                doneAnimating={() => {
                  setAnimationIndex(animationIndex + 1);
                }}
              />
            </div>
          );
        } else {
          return progressBar;
        }
      })}
    </div>
  );
}

export default App;
