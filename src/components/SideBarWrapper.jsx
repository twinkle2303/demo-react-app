import React, { useState } from "react";
import Sidebar from "./Sidebar";
// const text1 = "This is the first sidebar";
// const text2 = "This is the middle one";
// const text3 = "last Side bar";

const SidebarWrapper = () => {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(++count);
    console.log(count);
  };
  return (
    <div className="parentSidebar">
      <button onClick={handleClick}>Click</button>
      <Sidebar count={count} />
    </div>
  );
};

export default SidebarWrapper;
