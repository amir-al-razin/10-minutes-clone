import React from "react";
import { useParams } from "react-router-dom";

const Display = () => {
  let params = useParams()
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full rounded-lg"
        src={"https://www.youtube.com/embed/"+params.courseId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Display;
