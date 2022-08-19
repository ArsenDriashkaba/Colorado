import LinkButton from "../LinkButton/LinkButton";
import styles from "./Banner.module.css";

const Banner = (): JSX.Element => {
  return (
    <article className={styles.wrapper}>
      <h2>Every designer need us</h2>
      <p>
        Create your own color palette with 5 amazing colors. <br />
        Adjust them to your personal needs. <br />
        Save your creativness and use it whereever you want. <br />
        Try it for free right now.
      </p>
      <LinkButton href="editor" text="Try it now" />
    </article>
  );
};

export default Banner;
