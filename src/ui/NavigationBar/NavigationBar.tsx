import style from "./NavigationBar.module.scss";
import { ReactNode } from "react";
import heroRobot from "../../assets/img/heroRobot.png";
import sayHelloBG from "../../assets/img/sayHelloMessage.png";
import { Link } from "react-router-dom";

interface NavigationItem {
  label: any;
  path: string;
  classNameLink: any;
  classNameItem: any;
  id: number
}

interface NavigationBarProps {
  items: NavigationItem[];
  sayHello?: string;
  children?: ReactNode;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  sayHello,
  children,
  items,
}) => {
  return (
    <div className={style.navigationBlock}>
      <ul className={style.navigationList}>
        {items.map((element) => (
          <li key={element.id} className={element.classNameItem}>
            <Link className={element.classNameLink} to={element.path}>
              {element.label}
            </Link>
          </li>
        ))}
      </ul>
      {sayHello && (
        <div className={style.sayHelloBlock}>
          <p>
            <img src={sayHelloBG} alt="" />
            <span>{sayHello}</span>
          </p>
          <img className={style.sayHelloImgRobot} src={heroRobot} alt="" />
        </div>
      )}
      {children}
    </div>
  );
};
