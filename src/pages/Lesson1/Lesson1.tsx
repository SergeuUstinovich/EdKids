import style from "./Lesson1.module.scss";
import { Link } from "react-router-dom";
import ModalRoute from "../../ui/ModalRoute/ModalRoute";
import { LessonBackSvg } from "../../assets/svg/LessonBackSvg";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import pageRobot from "../../assets/img/pageRobot.png";
import { Button } from "../../ui/Button";

const Lesson1 = () => {
  return (
    <ModalRoute
      classNameOverlay={style.modalOverlay}
      classNameContent={style.modalContent}
    >
      <div className={style.lessonContainer}>
        <Link to={"/courses"}>
          <LessonBackSvg />
        </Link>
        <ProgressBar value={7} max={100} />
      </div>
      <div className={style.lessonBlock}>
        <h1 className={style.lessonTitle}>Учимся...</h1>
        <div className={style.lessonFill}></div>
        <h3 className={style.lessonNumTitle}>Сколько будет ....?</h3>
        <div className={style.lessonNumBlock}>
          <img className={style.lessonNumImg} src={pageRobot} alt="" />
          <ul className={style.lessonNumList}>
            <li>
              <Button>4</Button>
            </li>
            <li>
              <Button>9</Button>
            </li>
            <li>
              <Button>6</Button>
            </li>
            <li>
              <Button>5</Button>
            </li>
          </ul>
          <Button className={style.lessonNumBtn} isDisabled>
            Ответить
          </Button>
        </div>
      </div>
    </ModalRoute>
  );
};

export default Lesson1;
