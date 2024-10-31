import style from "./Layout.module.scss";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Onboarding } from "../../components/onboarding/Onboarding";
import { NavigationBar } from "../../ui/NavigationBar";
import { classNames } from "../../utils/classNames";

const Layout = () => {
  return (
    <div className={classNames(style.main, {}, ["container"])}>
      <Header />
      <Onboarding />
      <NavigationBar
        firstChild="первый элемент"
        secondChild="второй элемент"
        thirdChild="третий"
        fourdChild="четвертый"
      />
      <Footer />
    </div>
  );
};

export default Layout;
