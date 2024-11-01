import style from "./Hero.module.scss";
import { CoursesSvg } from "../../assets/svg/CoursesSvg";
import { FriendsSvg } from "../../assets/svg/FriendsSvg";
import { GamesSvg } from "../../assets/svg/GamesSvg";
import { StatsSvg } from "../../assets/svg/StatsSvg";
import { NavigationBar } from "../../ui/NavigationBar";

const Hero = () => {
  return (
    <NavigationBar
      items={[
        {
          classNameItem: style.navigationItem,
          classNameLink: style.navigationLink,
          label: <CoursesSvg />,
          path: "/courses",
        },
        {
          classNameItem: style.navigationItem,
          classNameLink: style.navigationLink,
          label: <GamesSvg />,
          path: "/games",
        },
        {
          classNameItem: style.navigationItem,
          classNameLink: style.navigationLink,
          label: <StatsSvg />,
          path: "/stats",
        },
        {
          classNameItem: style.navigationItem,
          classNameLink: style.navigationLink,
          label: <FriendsSvg />,
          path: "/friends",
        },
      ]}
      sayHello="Hello, maksim"
    />
  );
};

export default Hero;
