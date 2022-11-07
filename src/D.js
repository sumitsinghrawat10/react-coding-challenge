
import React, { useEffect, useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function D() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  const [image, setImage] = useState(BASE_IMG_URL);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    setImage(blur != 0 ? BASE_IMG_URL + "?blur=" + blur : BASE_IMG_URL);
  }, [blur]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={image} width={300} height={300} style={{ margin: 60 }} />
      <p1>Slide to blur</p1>
      <input
        type="range"
        step="1"
        min="0"
        max="10"
        value={blur}
        onChange={(e) => setBlur(e.target.value)}
      />
    </div>
  );
};

export default D;
 
