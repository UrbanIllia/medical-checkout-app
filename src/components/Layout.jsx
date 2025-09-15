import clsx from "clsx";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[375px]",
        "md:max-w-[768px]",
        "lg:max-w-[1028px]",
        "xl:max-w-[1440px]"
      )}
    >
      <Header />
      <main
        className={clsx(
          "px-[16px]",
          "md:px-[80px]",
          "lg:px-[100px]",
          "xl:px-[120px]"
        )}
      >
        <Outlet />
        <ToastContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
