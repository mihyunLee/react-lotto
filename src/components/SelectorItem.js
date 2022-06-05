import React from "react";
import Button from "./Button";

const SelectorItem = ({ id, isSelected, onClick }) => {
  return (
    <div className="SelectorItem">
      <Button
        key={id}
        type={isSelected ? "positive" : "default"}
        text={id}
        onClick={() => onClick(id)}
      />
    </div>
  );
};

export default React.memo(SelectorItem);
