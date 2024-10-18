import style from "./style.module.css";
import BASKET from "..//../images/Basket.svg";

function buttonOrandge() {
  
    return (
      <button>
        Корзина
        <img className={style.imgBasket} src={BASKET} alt="BASKET" />
      </button>
    )
  }
  
  export default buttonOrandge;
  