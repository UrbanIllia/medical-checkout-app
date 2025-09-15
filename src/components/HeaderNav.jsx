import { Link } from "react-router-dom";
import { PAGES } from "../config/pages.config";

const HeaderNav = () => {
  return (
    <nav className="md:block">
      <ul className="flex flex-row gap-4 lg:gap-10 justify-center">
        {Object.entries(PAGES).map(([key, path]) => (
          <li key={key}>
            <Link
              to={path}
              className="font-normal text-sm text-white hover:text-blue-600 transition"
            >
              {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
