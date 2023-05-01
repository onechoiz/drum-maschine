import PadBox from "./components/PadBox";

import classes from "./home.module.scss";
export default function Home() {
  return (
    <div className={classes["home"]}>
      <div className={classes["home__welcome-message"]}>
        <h2 >
          Welcome to retro drum machine{" "}
        </h2>
        <p>either click on sound or press the coresponding keys </p>
      </div>
   
      <PadBox />
    </div>
  );
}
