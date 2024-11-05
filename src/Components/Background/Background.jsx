import React from "react";

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <img
        src="public/Background.jpg"
        alt="Fondo"
        className="object-cover h-full w-full"
      />
    </div>
  );
}

export default Background;
