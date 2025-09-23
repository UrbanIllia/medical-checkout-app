import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import { PAGES } from "../config/pages.config";
import HeaderNavUser from "./HeaderNavUser";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import BurgerMenu from "./BurgerMenu";
import { t } from "../helpers/helpers";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#5a9bfe] z-20 shadow-md">
      <div
        className={clsx(
          "flex flex-row justify-between items-center h-[60px] px-[16px]",
          "md:px-[80px] md:h-[70px]",
          "lg:px-[120px]"
        )}
      >
        <Link
          to={PAGES.HOME}
          className="font-ubuntu font-medium text-xl text-white"
        >
          {t("Shopdoc")}
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <HeaderNav />
        </div>
        <HeaderNavUser />

        <button
          type="button"
          onClick={handleClick}
          className="md:hidden text-white text-2xl flex justify-center items-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      <BurgerMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;
