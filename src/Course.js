import React from "react";
import Accordion from "./components/Accordion";
import Display from "./components/Display";

const Course = () => {
  return (
    <div className="course flex-wrap flex w-full my-4 gap-4 container mx-auto">
      <Display />
      <Accordion />
    </div>
  );
};

export default Course;
