import { useState } from "react";
import "./styles.css";

/**
 *
 * @param {*} initialValue
 * @param {*} validator 유효성 검증 (특정 문자를 입력하지 못하도록 하는 등의 용도)
 */

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;

    // validator가 true 일 때만 value를 세팅할 수 있게 됨
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;