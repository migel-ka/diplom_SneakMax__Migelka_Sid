import { FC, useState } from "react";
import style from "./style.module.css";
import { Sneaker } from "../../type/sneaker";
import SneakersCardHove from "../SneakersCardHover";

type Props = {
  data: Sneaker;
};

const SneakersCard: FC<Props> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div key={data.id}
    className={style.container}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
        <img className={style.containerImg} src={data.image} alt={data.name} />
        <p> {data.name} </p>
        <span> {data.price} p </span>
        {isHovered && ( <SneakersCardHove data={data} key={data.id}/>)}
    </div>
  );
};

export default SneakersCard;
