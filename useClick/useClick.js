import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    //component가 didMount될 때는
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    //component가 willUnMount될 때는 function 리턴
    //(component가 mount 되지 않았을 때는 eventListener가 배치되지않게)
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  //component가 didMount될 때 한번만 실행되도록 dependency에 빈 배열 넣기!
  //=> 만약 dependency인자 자체를 없애면 update될 때마다 click event가 추가됨(의도와 다름)

  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  //sayHello를 가진 useClick이 mount되었을 때 click 이벤트를 추가

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
