import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
// import { FooterFriendsSvg } from "../../assets/svg/FooterFriendsSvg";
import { FooterHomeSvg } from "../../assets/svg/FooterHomeSvg";

interface FooterProps {
  id: number;
  icon: any;
  path: string;
}

const footerArr: FooterProps[] = [
  {
    id: 1,
    icon: <FooterHomeSvg />,
    path: "hero",
  },
  // {
  //   id: 2,
  //   icon: <FooterFriendsSvg />,
  //   path: "friends",
  // },
];

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.footerList}>
          {footerArr.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
