import style from "./Games.module.scss";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();

  const test = () => {
    navigate("games-1");
  };

  return (
    <div style={{ height: "100%" }}>
      <Container
        className={style.gamesContainer}
        name={"Максим"}
        appVariable={"Игра"}
        lvl={"16"}
      />
      <div
        style={{
          padding: "20px 12px",
          height: "100%",
        }}
      >
        <ul className={style.gamesList}>
          <li>
            <Button onClick={test}>Уровень 1</Button>
          </li>
          <li>
            <Button isDisabled>Уровень 2</Button>
          </li>
          <li>
            <Button isDisabled>Уровень 3</Button>
          </li>
          <li>
            <Button isDisabled>Уровень 4</Button>
          </li>
          <li>
            <Button isDisabled>Уровень 5</Button>
          </li>
        </ul>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Games;
