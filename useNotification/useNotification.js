import React from "react";

/**
 * useNotification
 * https://developer.mozilla.org/ko/docs/Web/API/notification
 *
 */

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("너가 평내 꽃 피우는 남자니?");

  return (
    <div className="App">
      <button onClick={triggerNotif}>notif</button>
    </div>
  );
};

export default App;
