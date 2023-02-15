import React from "react";

function Imageshow({ src }) {
  return (
    <div>
      <img src={src} alt=""  height="250px" width="300px" />
    </div>
  );
}

export default Imageshow;
