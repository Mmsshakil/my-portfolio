
import styles from "./bubble.module.css";



const BubbleText = () => {
  return (
    <h2 className="text-left text-3xl md:text-5xl font-thin text-indigo-300">
      {"I'm M. M. Shahriar Shakil".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;