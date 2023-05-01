import classes from "../style/pads.module.scss"
export default function Pads({text, onKeyDown, audioFile,onClick,keyP, btnClass}) {
    return(
        <div className={classes["pads"]} >
            <button  className={classes[btnClass]}  onKeyDown={onKeyDown} onClick={onClick} >  {text} <p>{keyP}</p> </button>  
        </div>
        
    )
};
