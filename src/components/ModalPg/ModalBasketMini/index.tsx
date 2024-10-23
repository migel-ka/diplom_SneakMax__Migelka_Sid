import { FC, useState } from "react";
import style from "./style.module.css";
import ButtonOne from "../../button/button";
import { useUnit } from "effector-react";
import ModalBasket from "../ModalBasket";
import TRASH from "..//..//images/modal/trash.svg";
import Modal from "../../feature/Modal";

type Props = {
    closeModal: () => void;
    isModalOpen: boolean;
}

const ModalBasketMini: FC<Props> = ({ closeModal, isModalOpen }) => {
    const sneaker = useUnit(snakeStore);

    const [isModalOpenBasket, setIsModalOpenBasket] = useState(false);

    const openModal = () => {
        setIsModalOpenBasket(true);
    };

    const closeModalBasket = () => {
        setIsModalOpenBasket(false);
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div>
              <div className={style.containerBord}>
                  {sneaker.map((sneake, index) => (
                    <div key={sneake.id} className={style.sneakerItem}>
                       <img className={style.sneakerItemImg} src={sneake.imgUrl} alt={sneake.title} />
                        <div className={style.sneakerTitle}>
                            <p>{sneake.title}</p>
                            <span>{sneake.price}</span>
                        </div>
                           <button className={style.sneakerItemBtn} onClick={() => removeSneaker(index)}>
                            <img src={TRASH} alt="TRASH" />
                           </button>
                    </div>
                  ))}
              </div>
              <div className={style.containerBtn}>
                <div>
                    <p>Итого:</p>
                    <span> { sneaker.map(x => x.price).reduce((a, b) => a + b) }</span>
                </div>
                <ButtonOne onClick={openModal} text="Перейти в корзину" /> 
                <ModalBasket closeModalBasket={closeModalBasket} isModalOpenBasket={isModalOpenBasket} />
              </div>
            </div>
           

        </Modal>
    );
}

export default ModalBasketMini;
