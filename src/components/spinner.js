import React, { memo } from "react";
import "../index.css";

const spinner = memo(() => {
  return (
    <div>
      <div className="spinner"></div>
    </div>
  );
});

export default spinner;
