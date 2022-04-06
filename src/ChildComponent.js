import React from "react";

function ChildComponent(props) {
  const handleChange = (e) => {
    props.parfun(e.target.value);
  };
  return (
    <textarea
      name="body"
      onChange={(e) => {
        handleChange(e);
      }}
      value={props.name}
    />
  );
}

export default ChildComponent;
