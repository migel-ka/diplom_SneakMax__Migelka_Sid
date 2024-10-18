import style from "./style.module.css";
import ADD from "..//..//images/main/Add.png";
import SEE from "..//..//images/main/See.png";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { Sneaker } from "../../type/sneaker";
import ModalSnake from "../../ModalSnake";

type Props = {
  data: Sneaker;
};

const SneakersCardHove:FC<Props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

    if (!data) {
      return <div>Loading...</div>; // loader
    }
  return (
    <>
        <div className={style.container}>
      <div className={style.buttonContainer}>
        <a className={style.button}> <img src={ADD} alt="ADD" /> </a>
        <div 
        onClick={openModal}
     //   to={`/sneaker/${data.id}`} 
        className={style.button}> 
        <img src={SEE} alt="SEE" /> 
        </div>
      </div>
    </div>
    {
      isModalOpen && <ModalSnake data={data} closeModal={closeModal} isModalOpen={isModalOpen}/>
    }
    </>
  );
};

export default SneakersCardHove;
