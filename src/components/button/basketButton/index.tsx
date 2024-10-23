import style from "./style.module.css";
import BASKET from "..//../images/Basket.svg";
import { useState } from "react";
import ModalBasketMini from "../../ModalPg/ModalBasketMini";

function ButtonOrange() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button 
        onClick={openModal}
        className={style.container}>
        Корзина
        <img className={style.imgBasket} src={BASKET} alt="BASKET" />
        <div className={style.containerCounter}> <p>{0}</p> </div>
      </button>
      {isModalOpen && <ModalBasketMini closeModal={closeModal} isModalOpen={isModalOpen} />}
    </>
  );
}

export default ButtonOrange;
