import style from "./Coruses.module.scss";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";
import { Outlet, useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const test = () => {
    navigate("lesson-1");
  };

  return (
    <div style={{ height: "100%" }}>
      <Container
        className={style.coursesContainer}
        name="Максим"
        appVariable="Курсы"
        lvl="16"
      />
      <div
        style={{
          padding: "20px 12px",
          height: "100%",
        }}
      >
        <ul className={style.coursesList}>
          <li>
            <Button onClick={test}>Урок 1</Button>
          </li>
          <li>
            <Button isDisabled>Урок 2</Button>
          </li>
          <li>
            <Button isDisabled>Урок 3</Button>
          </li>
          <li>
            <Button isDisabled>Урок 4</Button>
          </li>
          <li>
            <Button isDisabled>Урок 5</Button>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
