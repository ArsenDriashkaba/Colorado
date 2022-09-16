import { ReactNode } from "react";

import Link from "next/link";

import IcoButton from "../IcoButton/IcoButton";

import { BUTTON_TYPES } from "../../types";

interface LinkButtonProps {
  href: string;
  text: string;
}

type DefaultButton = LinkButtonProps & {
  type: BUTTON_TYPES.Default;
};

type IconButton = LinkButtonProps & {
  icon: ReactNode;
  isDark: boolean;
  type: BUTTON_TYPES.IconButton;
};

type Props = DefaultButton | IconButton;

const LinkButton = (props: Props): JSX.Element => {
  const { text, href } = { ...props };

  if (props.type === BUTTON_TYPES.IconButton) {
    return (
      <Link href={href}>
        <a>
          <IcoButton text={text} icon={props.icon} isDark={props.isDark} />
        </a>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <a>{<button>{text}</button>}</a>
    </Link>
  );
};

export default LinkButton;
