import bad from "../../assets/images/bad.png";
import good from "../../assets/images/good.png";
// import neutral from "../../assets/images/neutral.png"

export default function Reaction({ type, className }) {
  return (
    <>
      {type === "bad" ? (
        <img className={className} src={bad} alt="bad" />
      ) : type === "good" ? (
        <img className={className} src={good} alt="good" />
      ) : null}
      {/* {/* <img src={neutral} alt="neutral" /> */}
    </>
  );
}
