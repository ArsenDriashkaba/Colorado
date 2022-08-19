import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const LinkButton = ({ href, text }: Props): JSX.Element => {
  return (
    <Link href={href}>
      <a>
        <button>{text}</button>
      </a>
    </Link>
  );
};

export default LinkButton;
