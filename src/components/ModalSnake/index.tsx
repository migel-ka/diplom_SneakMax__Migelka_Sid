import { FC } from "react";
import { Sneaker } from "../type/sneaker";
import style from "./style.module.css";
import ButtonOne from "../button/button";
import DECARD from "..//images/modal/Vector.svg";
import Modal from "../feature/Modal";

type Props = {
    data: Sneaker;
    closeModal: () => void;
    isModalOpen: boolean;
}

const ModalSnake:FC<Props> = ({ data, closeModal, isModalOpen }) => {
    return(
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className={style.container}>
              <div className={style.modalBlock}>
                <div>
                  <img className={style.imgSneak} src={data.image} alt={data.name} />
                </div>
                <div className={style.modalBlockDescriptions}>
                   <div className={style.modalBlockDescription}>
                      <p>Артикул: {data.articul}</p>
                      <p>В наличии: {data.availability} шт.</p>
                   </div>
                      <h2>{data.name}</h2>
                      <p>Выберите размер</p>
                      <span>{data.price}</span>
                      <ButtonOne text="Заказать"/>
                      <div>
                          <p><img src={DECARD} alt="none" /> Бесплатная доставка до двери</p>
                          <p><img src={DECARD} alt="none" /> Оплата заказа при получении</p>
                          <p><img src={DECARD} alt="none" /> Обмен в течении двух недель</p>
                      </div>
                  </div>
              </div>
              <div className={style.modalBlock}>
                <div>
                   <h3>Описание</h3>
                   <p>{data.description}</p>
                </div>
                <div>
                   <h3>Характеристики</h3>
                   <p>Пол: {data.sex}</p>
                   <p>Цвета: {data.color}</p>
                   <p>Состав: {data.compound}</p>
                   <p>Страна: {data.contry}</p>
                </div>
              </div>
            </div>

        </Modal>
    );
}

export default ModalSnake;

                    