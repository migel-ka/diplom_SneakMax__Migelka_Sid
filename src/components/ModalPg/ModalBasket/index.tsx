import { FC } from "react";
import style from "./style.module.css";
import ButtonOne from "../../button/button";
import Modal from "../../feature/Modal";
import { snakeStore } from "../../store/snakeStore";
import { useUnit } from "effector-react";

type Props = {
    closeModalBasket: () => void;
    isModalOpenBasket: boolean;
}

const ModalBasket: FC<Props> = ({ closeModalBasket, isModalOpenBasket }) => {
    const sneaker = useUnit(snakeStore);

    const handleClick = () => {
        console.log(`Товары на сумму в количестве ${sneaker.length}`); 
    };

    return (
        <Modal isOpen={isModalOpenBasket} onClose={closeModalBasket}>
            <div className={style.container}>
                <h2>Оформление заказа</h2>
                <div className={style.containerBord}>
                    <p>Товаров в заказе: {sneaker.length}</p>
                    <p>Общая сумма: {/* Здесь можно добавить логику для подсчета общей суммы */}</p>
                    <p>Состав заказа</p>
                    {sneaker.map(sneake => (
                        <div key={sneake.id} className={style.sneakerItem}>
                            <p>Название: {sneake.title}</p>
                            <p>Цена: {sneake.price} ₽</p>
                        </div>
                    ))}
                </div>
                <ButtonOne onClick={handleClick} text="Оформить заказ" />
            </div>
        </Modal>
    );
}

export default ModalBasket;
