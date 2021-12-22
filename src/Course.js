import React from "react";
import { Outlet } from "react-router-dom";
import Accordion from "./components/Accordion";
import Display from "./components/Display";

const Course = () => {
  return (
    <div className="course flex-wrap flex w-full my-4 gap-4 container mx-auto">
      <main className="flex-1 p-4 rounded-lg bg-zinc-800">
        <Outlet />
      </main>
      <Accordion />
    </div>
  );
};

export default Course;
