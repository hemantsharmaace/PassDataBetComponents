import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [data, setData] = useState("");

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          handleOnChange(e);
        }}
        value={data}
      />
      <ChildComponent name={data} parfun={setData} />
    </>
  );
}

export default ParentComponent;
