import React from "react";

const Display = () => {
  return (
    <div className="flex-1 p-4 rounded-lg bg-zinc-800">
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/vxf4xvGb6t8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Display;
