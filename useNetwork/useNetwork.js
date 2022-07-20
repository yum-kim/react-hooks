import React, { useEffect, useState } from "react";

/**
 * useNetwork
 * navigator의 online 또는 offline상태를 확인 후 로직 수행
 */

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We just went offline");
  };
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>{onLine ? "onLine" : "offLine"}</h1>
    </div>
  );
};

export default App;
