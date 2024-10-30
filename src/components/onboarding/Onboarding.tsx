import style from './Onboarding.module.scss'
import { FormField } from '../../ui/FormField'
import Modal from '../../ui/Modal/Modal'

export const Onboarding = () => {
  return (
    <Modal>
      <div className={style.onboardingBlock}>
        <h1 className={style.onboardingTitle}>
          Добро пожаловать в приложение EdKids
        </h1>
        <form>
          <FormField label="">
            <input placeholder="Имя ребенка" type="text" />
          </FormField>
          <FormField label="">
            <input placeholder="Возраст ребенка" type="text" />
          </FormField>
        </form>
      </div>
    </Modal>
  )
}
