import ModalRoute from "../../ui/ModalRoute/ModalRoute";
import style from "./Friends.module.scss";
import testFriends from "../../assets/img/testFriends.png";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import Eclipse from "../../assets/img/Ellipse.png";
import Eclipse2 from "../../assets/img/Ellipse2.png";
import Eclipse3 from "../../assets/img/Ellipse3.png";
import Eclipse4 from "../../assets/img/Ellipse4.png";
import Eclipse5 from "../../assets/img/Ellipse5.png";

interface FriendsProps {
  id: number;
  icon: any;
  name: string;
  coin: number;
}

const friendsArr: FriendsProps[] = [
  {
    id: 1,
    icon: Eclipse,
    name: "Максим",
    coin: 4,
  },
  {
    id: 2,
    icon: Eclipse2,
    name: "Катя",
    coin: 3,
  },
  {
    id: 3,
    icon: Eclipse3,
    name: "Антон",
    coin: 2,
  },
  {
    id: 4,
    icon: Eclipse4,
    name: "Сергей",
    coin: 1,
  },
  {
    id: 5,
    icon: Eclipse5,
    name: "Полина",
    coin: 0,
  },
];

const Friends = () => {
  return (
    <ModalRoute classNameModal={style.friendsModal}>
      <div>
        <img style={{ marginBottom: "32px" }} src={testFriends} alt="" />
        <h1 className={style.friendsTitle}>Космическая лига</h1>
        <ul style={{ overflow: "scroll" }}>
          {friendsArr.map((item) => (
            <li className={style.friendsItem} key={item.id}>
              <p className={style.friendsId}>{item.id}</p>
              <img style={{ marginRight: "8px" }} src={item.icon} alt="" />
              <p className={style.friendsName}>{item.name}</p>
              <p className={style.friendsCoin}>
                <span>{item.coin}</span>
                <HeaderCoinSvg />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </ModalRoute>
  );
};

export default Friends;
