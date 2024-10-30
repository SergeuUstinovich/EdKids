import style from "./Onboarding.module.scss";
import { FormField } from "../../ui/FormField";
import Modal from "../../ui/Modal/Modal";
import { Button } from "../../ui/Button";
import React from "react";

export const Onboarding = () => {
  return (
    <Modal>
      <div className={style.onboardingBlock}>
        <h1 className={style.onboardingTitle}>
          Добро пожаловать в приложение EdKids
        </h1>
        <form>
          <h3 className={style.onboardingData}>Заполните данные</h3>
          <FormField label="">
            <input placeholder="Имя ребенка" type="text" />
          </FormField>
          <FormField label="">
            <input placeholder="Возраст ребенка" type="text" />
          </FormField>
          <Button>Начать</Button>
        </form>
      </div>
    </Modal>
  );
};
