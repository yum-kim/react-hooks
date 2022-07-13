import React, { useState } from "react";

const content = [
  {
    tab: "section1",
    content: "I'm the content of the section1"
  },
  {
    tab: "section2",
    content: "I'm the content of the section2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) return;

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        //클릭 시 setState(setCurrentIndex)를 시켜서 rerender => 보여지는 탭 컨텐츠 변경됨
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
