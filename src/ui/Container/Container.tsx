import { classNames } from "../../utils/classNames";
import style from "./Container.module.scss";

interface ContainerProps {
  name: string;
  appVariable: string;
  lvl: string;
  className?: string;
}

export const Container = ({
  className,
  name,
  appVariable,
  lvl,
}: ContainerProps) => {
  return (
    <ul className={classNames(style.containerList, {}, [className])}>
      <li>
        <span>{name}</span>
      </li>
      <li>
        <span>{appVariable}</span>
      </li>
      <li>
        <span>{lvl}</span>
      </li>
    </ul>
  );
};
