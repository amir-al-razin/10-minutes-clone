import { EnterIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const navLinks = [
  { label: "Study", Icon: BsBook, slug: "course" },
  { label: "Skills", Icon: BsBookmark, slug: "skills" },
  { label: "HSC", Icon: AiOutlinePlayCircle, dropdown: true, slug: "hsc" },
  { label: "Books", Icon: BiRocket, slug: "books" },
];
const Navbar = () => {
  return (
    <header className="border-b-2  items-center px-1 flex justify-between border-zinc-800 py-3 container mx-auto">
      <img src="/logo.svg" className="w-12  " />
      <nav className="flex items-center justify-center bg-zinc-800 rounded-lg p-1 gap-2 ">
        {navLinks.map(({ label, Icon, dropdown, slug }) =>
          !dropdown ? (
            <NavLink
              to={"/" + slug}
              className={
                "px-6 py-1 flex items-center gap-2 transition duration-300 font-medium text-lg hover:bg-zinc-700 active:bg-zinc-700 rounded-lg"
              }
              style={({ isActive }) => ({
                background: isActive ? "rgba(17, 94, 89, .3)" : "",
              })}
            >
              <Icon />
              {label}
            </NavLink>
          ) : (
            <Dropdown label={label} Icon={Icon} />
          )
        )}
      </nav>
      <Link
        to="/course"
        className="px-5 py-2 gap-2 flex items-center bg-zinc-800 rounded-lg font-medium hover:bg-zinc-700 transition duration-300"
      >
        <EnterIcon className="" /> লগ-ইন
      </Link>
    </header>
  );
};

export default Navbar;

function BsBook(props) {
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
        d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 018.5 2.5v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 010 13.5v-11a.5.5 0 01.276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 01.22-.103 12.958 12.958 0 012.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 001 2.82z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 007.5 2.5v11a.5.5 0 00.854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0016 13.5v-11a.5.5 0 00-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0115 2.82z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BiRocket(props) {
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
        d="M17.496,4c-1.425,0-3.378,0.256-4.597,1.475C10.794,7.58,9.391,9.03,9.388,9.033 C9.148,9.28,8.795,9.387,8.465,9.316c-0.007,0-2.248-0.435-3.948,0.504l9.694,9.694c0.943-1.702,0.541-3.919,0.536-3.944 c-0.065-0.328,0.037-0.667,0.273-0.903l3.536-3.535c1.896-1.896,1.516-5.498,1.271-6.929C19.289,4.111,18.443,4,17.496,4z M17.142,9.718c-0.781,0.781-2.046,0.781-2.828,0c-0.781-0.782-0.781-2.047,0-2.828c0.782-0.782,2.047-0.782,2.828,0 C17.924,7.671,17.924,8.936,17.142,9.718z"
      />
      <path d="M20.92,2.384C20.857,2.368,19.364,2,17.496,2c-2.585,0-4.663,0.713-6.011,2.061C9.997,5.549,8.857,6.712,8.31,7.273 C7.096,7.136,4.233,7.07,2.293,9.011C2.105,9.198,2,9.452,2,9.718s0.105,0.52,0.293,0.707l11.313,11.313 c0.188,0.188,0.441,0.293,0.707,0.293s0.52-0.105,0.707-0.293c1.954-1.953,1.894-4.814,1.767-6.01l3.184-3.183 c3.191-3.191,1.74-9.182,1.677-9.435C21.559,2.753,21.278,2.473,20.92,2.384z M18.557,11.132l-3.536,3.535 c-0.236,0.236-0.339,0.575-0.273,0.903c0.005,0.025,0.407,2.242-0.536,3.944L4.517,9.82c1.7-0.938,3.941-0.504,3.948-0.504 c0.33,0.07,0.684-0.036,0.923-0.283c0.003-0.003,1.406-1.453,3.512-3.559C14.118,4.256,16.071,4,17.496,4 c0.947,0,1.793,0.111,2.332,0.203C20.072,5.634,20.453,9.235,18.557,11.132z" />
      <circle cx={15.728} cy={8.304} r={2} />
      <path d="M5,16c-2,1-2,5-2,5s3,0,5-2L5,16z" />
    </svg>
  );
}

function AiOutlinePlayCircle(props) {
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
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
      <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z" />
    </svg>
  );
}

function BsBookmark(props) {
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
        d="M8 12l5 3V3a2 2 0 00-2-2H5a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V3a1 1 0 00-1-1H5a1 1 0 00-1 1v10.234z"
        clipRule="evenodd"
      />
    </svg>
  );
}
