import React from "react";
import Imageshow from "./Imageshow";
function ImageList({ images }) {
  
  return (
    <div className="image_list">
      {images.map((image, i) => (
        <Imageshow src={image.urls.small} key={i} />
      ))}
    </div>
  );
}

export default ImageList;
