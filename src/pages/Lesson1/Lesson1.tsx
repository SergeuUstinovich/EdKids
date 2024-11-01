import style from "./Lesson1.module.scss";
import { Link } from "react-router-dom";
import ModalRoute from "../../ui/ModalRoute/ModalRoute";
import { LessonBackSvg } from "../../assets/svg/LessonBackSvg";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import pageRobot from "../../assets/img/pageRobot.png";
import { Button } from "../../ui/Button";
import YouTube, { YouTubeEvent } from "react-youtube";
import React, { useEffect, useState } from "react";
import { GoodWorkModal } from "../../components/goodWorkModal/GoodWorkModal";

const arr = [
  {
    id: 1,
    value: 3,
  },
  {
    id: 2,
    value: 9,
  },
  {
    id: 3,
    value: 6,
  },
  {
    id: 4,
    value: 5,
  },
];

const Lesson1 = () => {
  const [value, setValue] = useState<number | null>();
  const [succes, setSucces] = useState(false);
  const [summ, setSumm] = useState(false);

  const handleValue = (value: number) => {
    setValue(value);
  };

  // const handleSucces = () => {
  //   if (value === 4) {
  //     setSucces(true);
  //   }
  // };

  const handleRefetch = () => {
    setValue(null);
  };

  const handleGoods = () => {
    setSucces(true);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      
    }, 2000);
    return clearTimeout(time);
  }, []);

  const videoId = "E4WtDC9PtWo";
  const opts = {
    height: "188px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event:YouTubeEvent) => {  
    event.target.playVideo(); 
  };
  const styleSucces = value
    ? value === 3
      ? { backgroundColor: "#CBE8FF" }
      : { backgroundColor: "#FFCBCB" }
    : {};

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
        <div className={style.lessonFill}>
          <YouTube
            iframeClassName={style.youTube}
            onReady={onReady}
            videoId={videoId}
            opts={opts}
            onEnd={() => setSumm(true)}
          />
        </div>
        <h3 className={style.lessonNumTitle}>
          <div>
            {summ && (
              <>
                <p>Сколько животных было на экране?</p>
                {value !== null && value !== undefined && (
                  <ul className={style.list}>
                    <li className={style.item}>
                      <Button>{value}</Button>
                    </li>
                  </ul>
                )}
              </>
            )}
          </div>
          <div className={style.boxRobot}>
            <img className={style.lessonNumImg} src={pageRobot} alt="" />
          </div>
        </h3>
        <div className={style.lessonNumBlock}>
          <ul className={style.lessonNumList}>
            {arr.map((item) => (
              <React.Fragment key={item.id}>
                {value !== item.value && (
                  <li >
                    <Button
                      isDisabled={!!value || !summ}
                      onClick={() => handleValue(item.value)}
                    >
                      {item.value}
                    </Button>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className={style.boxbtn} style={styleSucces}>
          {value !== null && value !== undefined ? (
            value === 3 ? (
              <p className={style.descr} style={{ color: "#358fd2" }}>
                ПРАВИЛЬНО!
              </p>
            ) : (
              <p className={style.descr} style={{ color: "#d23535" }}>
                Давай попробуем ещё!
              </p>
            )
          ) : (
            ""
          )}
          {value ? (
            <>
              {value === 3 ? (
                <Button onClick={handleGoods} className={style.lessonNumBtn}>
                  Продолжить
                </Button>
              ) : (
                <Button onClick={handleRefetch} className={style.lessonNumBtn}>
                  Попробовать
                </Button>
              )}
            </>
          ) : (
            <Button
              // onClick={handleSucces}
              className={style.lessonNumBtn}
              isDisabled={!value}
            >
              Ответить
            </Button>
          )}
        </div>
        <GoodWorkModal isSuccess={succes} />
      </div>
    </ModalRoute>
  );
};

export default Lesson1;
