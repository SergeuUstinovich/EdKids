import style from "./Layout.module.scss";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Onboarding } from "../../components/onboarding/Onboarding";
import { classNames } from "../../utils/classNames";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("hero");
    }
  }, [location.pathname]);

  return (
    <div /* style={{ backgroundColor: "#241F36" }} */>
      <Header />
      <main className={classNames(style.main, {}, ["container"])}>
        <Outlet />
        <Onboarding />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
