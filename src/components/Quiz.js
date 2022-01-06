import { Progress, ProgressIndicator } from "@radix-ui/react-progress";
import React, { useEffect, useState } from "react";
import useInterval from "../custom-hooks/useInterval";

const optIndex = ["A", "B", "C", "D"];

const Questions = () => {
  return questions.map((qu) => (
    <div className="text-center flex flex-col gap-2 items-center">
      <h4 className="text-xl font-semibold">{qu.ques}</h4>
      <ul className="flex flex-col gap-2 min-w-[50%]   ">
        {qu.options.map((opt, index) => (
          <li className="text-lg bg-zinc-600 rounded-lg py-1 px-2 flex items-center gap-2">
            <div className="border-2 border-zinc-500 rounded-full p-2 h-8 w-8 flex items-center justify-center text-zinc-300">
              <span className=" ">{optIndex[index]}</span>
            </div>
            {opt}
          </li>
        ))}
      </ul>
    </div>
  ));
};

const Quiz = () => {
  // const total = 60000;
  const total = 280000;
  const [progress, setProgress] = React.useState(0);
  const [time, setTime] = React.useState(total);
  useInterval(() => {
    // Your custom logic here
    time > 0 && setTime(time - 1000);
  }, 1000);
  let percentage = (time * 100) / total;
  if (percentage >= 0) {
    console.log(100 - percentage);
  }
  React.useEffect(() => setProgress(100 - percentage), [percentage]);
  return (
    <div className="h-full  w-full flex flex-col gap-4">
      {/* time */}
      <div className="bg-zinc-700 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">পর্ব ২</h2>
          <button className="rounded-lg px-4 py-1.5 font-medium bg-red-600/20 hover:bg-red-600/40 text-white transition duration-200 focus:outline-none focus:bg-red-600/40">
            শেষ করুন
          </button>
        </div>
        <Clock total={total} />

        <Progress
          value={progress}
          className="w-full h-2 rounded-full overflow-hidden bg-teal-900 relative"
        >
          <ProgressIndicator
            className={` h-full bg-teal-600 transition-[width] duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
            style={{ width: `${progress}%` }}
          />
        </Progress>
      </div>
      <div className="bg-zinc-700 rounded-lg p-4 flex flex-col gap-6">
        <Questions />
      </div>
    </div>
  );
};

export default Quiz;

function Clock(props) {
  const [date, setDate] = useState(props.total);
  const [min, setMin] = useState(
    Math.floor((date % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [sec, setSec] = useState(Math.floor((date % (1000 * 60)) / 1000));

  useInterval(() => {
    // Your custom logic here
    if (date >= 0) {
      setDate(date - 1000);
      setMin(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60)));
      setSec(Math.floor((date % (1000 * 60)) / 1000));
    }
  }, 1000);
  return (
    <h2 className="text-2xl text-center font-semibold ">
      ⏱{String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
    </h2>
  );
}

let questions = [
  {
    ques: "কোষ প্রাচীরের গঠন সম্পর্কে কোন তথ্যটি ভুল?",
    options: [
      "কূপ এলাকা হলো সবচেয়ে পাতলা এলাকা",
      "ভাজক টিস্যুর কোষপ্রাচীরে সেকেন্ডারি প্রাচীর থাকেনা",
      "মাইক্রোফাইব্রিল হলো কোষ প্রাচীরের ক্ষুদ্রতম গাঠনিক একক",
      "কোষ প্রাচীর সজীব প্রোটোপ্লাস্টকে ঘিরে রাখে",
    ],
    correctIndex: 3,
  },
  {
    ques: "কোষ প্রাচীরের গঠন সম্পর্কে কোন তথ্যটি ভুল?",
    options: [
      "কূপ এলাকা হলো সবচেয়ে পাতলা এলাকা",
      "ভাজক টিস্যুর কোষপ্রাচীরে সেকেন্ডারি প্রাচীর থাকেনা",
      "মাইক্রোফাইব্রিল হলো কোষ প্রাচীরের ক্ষুদ্রতম গাঠনিক একক",
      "কোষ প্রাচীর সজীব প্রোটোপ্লাস্টকে ঘিরে রাখে",
    ],
    correctIndex: 3,
  },
  {
    ques: "কোষ প্রাচীরের গঠন সম্পর্কে কোন তথ্যটি ভুল?",
    options: [
      "কূপ এলাকা হলো সবচেয়ে পাতলা এলাকা",
      "ভাজক টিস্যুর কোষপ্রাচীরে সেকেন্ডারি প্রাচীর থাকেনা",
      "মাইক্রোফাইব্রিল হলো কোষ প্রাচীরের ক্ষুদ্রতম গাঠনিক একক",
      "কোষ প্রাচীর সজীব প্রোটোপ্লাস্টকে ঘিরে রাখে",
    ],
    correctIndex: 3,
  },
  {
    ques: "কোষ প্রাচীরের গঠন সম্পর্কে কোন তথ্যটি ভুল?",
    options: [
      "কূপ এলাকা হলো সবচেয়ে পাতলা এলাকা",
      "ভাজক টিস্যুর কোষপ্রাচীরে সেকেন্ডারি প্রাচীর থাকেনা",
      "মাইক্রোফাইব্রিল হলো কোষ প্রাচীরের ক্ষুদ্রতম গাঠনিক একক",
      "কোষ প্রাচীর সজীব প্রোটোপ্লাস্টকে ঘিরে রাখে",
    ],
    correctIndex: 3,
  },
];
