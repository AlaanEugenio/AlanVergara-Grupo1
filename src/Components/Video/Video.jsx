import React from "react";

const VideoEmbed = () => {
  return (
    <div className="flex justify-start my-8">
      <div className="overflow-hidden rounded-3xl">
        <div className="">
          <iframe
            src="https://www.youtube.com/embed/GyY0OxDk5lI?si=utdMsk_gPdIprp4l"
            title="Resolver cubo de Rubik 3x3 (Principiantes) | Rápido y Fácil | EL MEJOR TUTORIAL | Español"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
