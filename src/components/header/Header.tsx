import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { HeaderFireSvg } from "../../assets/svg/HeaderFireSvg";
import style from "./Header.module.scss";

interface HeaderProps {
  id: number;
  icon: any;
  label?: string;
}

const headerArr: HeaderProps[] = [
  {
    id: 1,
    icon: <HeaderCoinSvg />,
  },
  {
    id: 2,
    icon: <HeaderFireSvg />,
  },
];

export const Header = () => {
  return (
    <header className={style.header}>
      <ul className={style.headerList}>
        {headerArr.map((item) => (
          <li key={item.id}>
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};
