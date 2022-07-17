import React from "react";

/** useConfirm
 *
 * 사용자가 무언가를 하기전에 (확인)하는 것
 */
const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  if (!onCancel || typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are your sure?", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;


