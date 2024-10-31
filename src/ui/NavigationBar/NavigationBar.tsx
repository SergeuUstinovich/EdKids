import { ReactNode } from "react";

interface NavigationBarProps {
  firstChild: ReactNode;
  secondChild: ReactNode;
  thirdChild: ReactNode;
  fourdChild: ReactNode;
  sayHello?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  firstChild,
  secondChild,
  thirdChild,
  fourdChild,
  sayHello,
}) => {
  return (
    <div>
      <ul>
        <li>{firstChild}</li>
        <li>{secondChild}</li>
        <li>{thirdChild}</li>
        <li>{fourdChild}</li>
      </ul>
      <div>
        <span>{sayHello}</span>
        {sayHello && <img src="" alt="" />}
      </div>
    </div>
  );
};
