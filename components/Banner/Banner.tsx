import styles from "./Banner.module.css";

const Banner = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <h2>Every designer need us</h2>
      <p>
        Create your own color palette with 5 amazing colors. <br />
        Adjust them to your personal needs. <br />
        Save your creativness and use it whereever you want. <br />
        Try it for free right now.
      </p>
      <button>Try it now</button>
    </section>
  );
};

export default Banner;
