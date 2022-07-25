import React, { useRef } from "react";

/**
 * useFullScreen
 * 
 */
const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen(); //browser마다 function 이름은 다름. 확인 필요
    }
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "full" : "small");
  };

  const { element, triggerFull, exitFull } = useFullScreen(onFulls);

  return (
    <div className="App">
      <div ref={element}>
        <img src="https://ifh.cc/g/n82Dno.jpg" alt="" />
        <button onClick={exitFull}>exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>make fullScreen</button>
    </div>
  );
};

export default App;
