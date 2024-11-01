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
    label: '100',
  },
  {
    id: 2,
    icon: <HeaderFireSvg />,
    label: '5',
  },
];

export const Header = () => {
  return (
    <header className={style.header}>
      <ul className={style.headerList}>
        {headerArr.map((item) => (
          <li className={style.item} key={item.id}>
            <p className={style.descr}>
            {item.icon}
            </p>
            
            <span className={style.valueCoin}>{item.label}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};
