import { useRef, useState } from "react";
import Pads from "./Pads";
import classes from "../style/padbox.module.scss";
import { names } from "../../../mydata/names";

export default function PadBox(params) {
  const [drums, setDrums] = useState(names);
  const [isPressed, SetIsPressed] =useState(false)
  const [currKey, setCurrKey] = useState ('')


  const handleonKeyDown = (e) => {
    SetIsPressed(!isPressed)
    
    const drum = drums.find((drum) => drum.key === e.key);
    if (drum) {
      const audio = new Audio(`sounds/${drum.sound}.wav`);
      setCurrKey(e.key)
      audio.play();
    }
    
  };

  const handleOnClick = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  let list = drums.map((drum) => {

    const btnClass = isPressed &&  currKey === drum.key ? "key-pressed" : ""
    return (
      <Pads
        key={drum.key}
         text={drum.name}
         keyP={drum.key}
         btnClass={btnClass}
 
        onKeyDown={handleonKeyDown}
        onClick={() => {handleOnClick(`sounds/${drum.sound}.wav`) }}

      />
    );
  });

  return <div className={classes["padbox"]}>{list}</div>;
}
