import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Quiz from "./Quiz";

const Display = () => {
  let params = useParams();
  let [searchParam] = useSearchParams();
  let pattern = /^.*(?=(\/))/;
  let type = searchParam.get("type");

  return type == "video" ? (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full rounded-lg"
        src={"https://www.youtube.com/embed/" + params.courseId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  ) : (
    <Quiz />
  );
};

export default Display;
