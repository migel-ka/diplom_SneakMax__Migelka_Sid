import style from "./style.module.css";
import ADD from "..//..//images/main/Add.png";
import SEE from "..//..//images/main/See.png";
import { FC, useState } from "react";
import { Sneaker } from "../../type/sneaker";
import ModalSnake from "../../ModalPg/ModalSnake";
import { addSneaker } from "../../store/snakeStore";

type Props = {
  data: Sneaker;
};

const SneakersCardHove:FC<Props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleClickAdd = () => {
    addSneaker(data);
  };

  return (
    <>
        <div className={style.container}>
      <div className={style.buttonContainer}>
      <div 
        onClick={openModal}
        className={style.button}> 
        <img src={SEE} alt="SEE" /> 
      </div>
      <div 
        onClick={handleClickAdd}
        className={style.button}> 
        <img src={ADD} alt="ADD" /> 
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
