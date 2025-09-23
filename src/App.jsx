import { Route, Router, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Layout from "./components/Layout";
import { PAGES, PAGES_USER } from "./config/pages.config";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";
import Logout from "./pages/Logout";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeCart } from "./redux/cartSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PAGES.HOME} element={<Home />} />
          <Route path={PAGES.ABOUT} element={<About />} />
          <Route path={PAGES.REVIEWS} element={<Reviews />} />
          <Route path={PAGES.CONTACT} element={<Contact />} />
          <Route path={PAGES.SHOP} element={<Shop />} />
          <Route path={PAGES_USER.SEARCH} element={<Search />} />
          <Route path={PAGES_USER.CHECKOUT} element={<Checkout />} />
          <Route path={PAGES_USER.LOGOUT} element={<Logout />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
