import clsx from "clsx";
import { FaArrowUp } from "react-icons/fa";

const Logout = () => {
  return (
    <div className="py-20 relative">
      <h2 className="text-[50px] text-blue-500 text-center">Logout</h2>
      <div
        className={clsx(
          "absolute top-0 right-[123px]",
          "md:right-[32px]",
          "lg:right-[68px]",
          "xl:right-[48px]"
        )}
      >
        <FaArrowUp size={40} />
      </div>
    </div>
  );
};

export default Logout;
