import React, { useEffect } from "react";

/**
 * useBeforeLeave
 * 마우스가 영역을 벗어날 때
 */
const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    console.log(event);

    const { clientY } = event;
    if (clientY <= 0) onBefore();

    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => {
        document.removeEventListener("mouseleave", handle);
      };
    }, []);
  };
};

const App = () => {
  const begForLife = () => console.log("pls don't leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
