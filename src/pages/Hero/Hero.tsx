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
          id: 1,
        },
        {
          classNameItem: style.navigationItem,
          classNameLink: style.navigationLink,
          label: <GamesSvg />,
          path: "/games",
          id: 2,
        },
        {
          classNameItem: style.navigationItem,
          classNameLink: style.navigationLink,
          label: <StatsSvg />,
          path: "/stats",
          id: 3,
        },
        {
          classNameItem: style.navigationItem,
          classNameLink: style.navigationLink,
          label: <FriendsSvg />,
          path: "/friends",
          id: 4,
        },
      ]}
      sayHello="Hello, Maksim!"
    />
  );
};

export default Hero;
