import style from "./Onboarding.module.scss";
import { FormField } from "../../ui/FormField";
import Modal from "../../ui/Modal/Modal";
import { Button } from "../../ui/Button";
import { useState } from "react";
import { OnboardingArrowSvg } from "../../assets/svg/OnboardingArrowSvg";

export const Onboarding = () => {
  const [value, setValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal lazy isSpecial isOpen={isOpen} onClose={handleClose}>
      <div className={style.onboardingBlock}>
        <h1 className={style.onboardingTitle}>
          Добро пожаловать в приложение EdKids
        </h1>
        <form className={style.onboardingForm}>
          <h3 className={style.onboardingData}>Заполните данные</h3>
          <FormField label="">
            <input
              className={style.onboardingInput}
              placeholder="Имя ребенка"
              type="text"
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
          </FormField>
          <FormField label="">
            <input
              className={style.onboardingInput}
              placeholder="Возраст ребенка"
              type="text"
              value={numberValue}
              onChange={(e: any) => setNumberValue(e.target.value)}
            />
            <OnboardingArrowSvg />
          </FormField>
        </form>
        <Button
          onClick={handleClose}
          isDisabled={value === ""}
          className={style.onboardingBtn}
        >
          Начать
        </Button>
      </div>
    </Modal>
  );
};
