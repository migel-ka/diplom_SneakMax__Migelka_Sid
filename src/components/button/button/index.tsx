import { FC } from "react";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonOne : FC<ButtonProps> = ({ text, onClick }) => {

    return (
      <button className={style.button} onClick={onClick}>
       { text }    
      </button>
    )
  };
  
  export default ButtonOne;