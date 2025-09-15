import clsx from "clsx";
import React from "react";
import HeaderNav from "./HeaderNav";

const BurgerMenu = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div
          className={clsx(
            "md:hidden bg-[#5a9bfe] absolute top-[60px] left-0 right-0 z-10",
            "px-[16px] py-4 flex flex-col gap-4",
            "transition-transform duration-300 ease-in-out max-w-[375px] w-full mx-auto",
            isOpen ? "translate-y-0" : "-translate-y-full z-0"
          )}
        >
          <HeaderNav />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
