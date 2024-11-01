import style from "./GoodWorkModal.module.scss";
import Modal from "../../ui/Modal/Modal";
import goodWork from "../../assets/img/goodWork.png";
import { Button } from "../../ui/Button";
import { useState } from "react";
import { HeaderFireSvg } from "../../assets/svg/HeaderFireSvg";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { GoodEnergySvg } from "../../assets/svg/GoodEnergySvg";

export const GoodWorkModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal lazy isOpen={isOpen}>
      <div className={style.goodWorkBlock}>
        <img className={style.goodWorkImg} src={goodWork} alt="" />
        <h1 className={style.goodWorkTitle}>Отличный урок!</h1>
        <ul className={style.goodWorkGrid}>
          <li>
            <p>
              <HeaderFireSvg />
              <span>10</span>
            </p>
          </li>
          <li>
            <p>
              <GoodEnergySvg />
              <span>100%</span>
            </p>
          </li>
          <li>
            <p>
              <HeaderCoinSvg />
              <span>4</span>
            </p>
          </li>
        </ul>
        <Button onClick={() => setIsOpen(false)} className={style.goodWorkBtn}>
          Продолжить
        </Button>
      </div>
    </Modal>
  );
};
