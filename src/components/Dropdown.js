import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link, NavLink } from "react-router-dom";
import { BsChevronDown } from "./Accordion";

export default function ({ label, Icon, dropdownLinks }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" px-6 py-1 flex items-center gap-2 transition duration-300 font-medium text-lg hover:bg-zinc-700 rounded-lg">
        <Icon /> {label}{" "}
        <BsChevronDown className="text-sm stroke-1 text-zinc-500" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-zinc-700 p-2 rounded-lg">
        {[
          "HSC ICT crash course",
          "HSC Grammer crash course",
          "HSC crash course 2023",
        ].map((link) => (
          <DropdownLink dropdownLink={link} />
        ))}
        <DropdownMenu.Separator />
        <DropdownMenu.Arrow className="text-zinc-700 fill-zinc-700 " />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

const DropdownLink = ({ dropdownLink }) => (
  <NavLink
    style={({ isActive }) => ({ background: isActive ? "#115e59" : "" })}
    to="/course"
  >
    <DropdownMenu.Item className="flex items-center gap-2 px-5 py-1.5  hover:bg-zinc-600 transition duration-300 hover:outline-none rounded-lg">
      <GrDocumentText className="text-zinc-400" /> {dropdownLink}
    </DropdownMenu.Item>
  </NavLink>
);

function GrDocumentText(props) {
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
      <path
        fill="none"
        strokeWidth={2}
        d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"
      />
    </svg>
  );
}
