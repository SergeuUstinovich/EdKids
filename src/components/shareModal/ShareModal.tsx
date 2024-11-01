import style from "./ShareModal.module.scss";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import Modal from "../../ui/Modal/Modal";
import { useEffect, useState } from "react";
import { FooterFriendsSvg } from "../../assets/svg/FooterFriendsSvg";
import { ShareParentsSvg } from "../../assets/svg/ShareParentsSvg";
import { useLocation, useNavigate } from "react-router-dom";

export const ShareModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/friends') {
      setOpenModal(true)
    }
  }, [])

  const handleClose = () => {
    setOpenModal(false)
    navigate('/')
  }

  return (
    <Modal
      lazy
      hiddenClose
      onClose={handleClose}
      className={style.modalShare}
      isOpen={openModal}
    >
      <div className={style.modalBlock}>
        <h1 className={style.shareTitle}>Поделиться</h1>
        <p className={style.shareLabel}>
          Ты моможешь поделиться своими достижениями с друзьями или родителями!
        </p>
        <div className={style.shareList}>
          <div className={style.shareItem}>
            <h3 className={style.shareItemTitle}>
              <FooterFriendsSvg />
              <span>Поделиться с друзьями</span>
            </h3>
            <p>
              <span>1000</span>
              <HeaderCoinSvg />
            </p>
          </div>
          <div className={style.shareItem}>
            <h3 className={style.shareItemTitle}>
              <ShareParentsSvg />
              <span>Поделиться с родителями</span>
            </h3>
            <p>
              <span>500</span>
              <HeaderCoinSvg />
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
