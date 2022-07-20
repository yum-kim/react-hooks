import React, { useEffect, useRef } from "react";

/**
 * useFadeIn
 * hooks와 animation을 함께 사용
 */

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") return;

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem Ipsum</p>
    </div>
  );
};

export default App;
