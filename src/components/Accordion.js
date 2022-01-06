import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function () {
  return (
    <aside className="flex-[.35] p-4 pr-2 rounded-md bg-zinc-800">
      <div className="overflow-y-scroll pr-2 max-h-[80vh] ">
        <Accordion.Root
          type="single"
          className="flex flex-col gap-2"
          collapsible
        >
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Item value={"item-" + index} />
            ))}
        </Accordion.Root>
      </div>
    </aside>
  );
}

const Item = ({ value }) => (
  <Accordion.Item value={value} className="overflow-hidden">
    <Accordion.Header className="">
      <Accordion.Trigger className="trigger flex text-1.5xl focus-visible:border-b-2  focus-visible:outline-none focus-visible:border-teal-600 justify-start w-full items-center  font-semibold bg-zinc-700 p-4 w-full rounded-md rounded-b-none">
        <AiOutlineCheck className="bg-teal-800/50 text-teal-500  rounded-full  p-1 text-2xl" />
        <span className="mx-3">৫. প্রোগ্রামিং ভাষা</span>
        <BsChevronDown
          aria-hidden
          className="chevron transition  duration-300 ml-auto text-sm font-bold stroke-1  text-zinc-400"
        />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="content transition duration-150 bg-zinc-700">
      <ul className="p-5 pt-0 flex flex-col gap-2">
        {[
          { label: "পর্ব ২", id: "g2nMKzhkvxw", type: "video" },
          { label: "পর্ব ৩", id: "br4cYeTvb5I", type: "video" },
          { label: "পর্ব ৪", id: "e0ctD6p2MyA", type: "quiz" },
          { label: "পর্ব ৫", id: "jDUNolYzLo0", type: "video" },
        ].map((link, index) => (
          <Episode
            key={index}
            link={++index + ". " + link.label}
            type={link.type}
            time="5"
            slug={link.id}
          />
        ))}
      </ul>
    </Accordion.Content>
  </Accordion.Item>
);

const Episode = ({ link, type, time, amount, slug }) => (
  <Link
    to={slug + "?type=" + type}
    className="hover:bg-zinc-600 focus:bg-zinc-600 focus:border-0 focus:outline-none active:bg-zinc-600 transition duration-300 flex flex-col   text-xl font-medium rounded-lg py-2 px-4"
  >
    {link}
    <span className="text-zinc-400 text-base font-semibold gap-1 uppercase flex items-center">
      {type == "video" ? (
        <AiOutlineVideoCamera className="text-2xl" />
      ) : (
        <RiNewspaperLine className="text-2xl " />
      )}
      <Dot /> {type == "video" ? "video" : "quiz"}
      <Dot /> {time ? `${time} min` : `${amount} questions`}
    </span>
  </Link>
);

function AiOutlineVideoCamera(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" />
    </svg>
  );
}

function RiNewspaperLine(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fillRule="nonzero"
          d="M16 20V4H4v15a1 1 0 0 0 1 1h11zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3zm-1-10v7a1 1 0 0 0 2 0v-7h-2zM6 6h6v6H6V6zm2 2v2h2V8H8zm-2 5h8v2H6v-2zm0 3h8v2H6v-2z"
        />
      </g>
    </svg>
  );
}

function AiOutlineCheck(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
    </svg>
  );
}

export function BsChevronDown(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Dot = () => <div className="w-1 h-1 rounded-full bg-zinc-400" />;
