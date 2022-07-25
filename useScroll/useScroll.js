import React, { useEffect, useState } from "react";

/**
 * useScroll
 * 유저가 스크롤해서 무언가를 지나쳤을 때 동작 부여
 */
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setState({ y: window.scrollY, X: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

export default App;
