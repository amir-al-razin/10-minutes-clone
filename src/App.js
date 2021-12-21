import "./App.css";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Pricing Tables",
    slug: "pricing-tables",
  },
  {
    label: "1 minute course",
    slug: "course",
  },
];
function App() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center">
      <ul>
        {links.map((link) => (
          <Link
            to={link.slug}
            className="text-3xl block font-bold underline decoration-slate-300"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default App;
