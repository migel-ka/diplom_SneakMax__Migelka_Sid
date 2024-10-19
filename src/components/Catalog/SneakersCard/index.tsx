import { FC, useState } from "react";
import style from "./style.module.css";
import { Sneaker } from "../../type/sneaker";
import SneakersCardHove from "../SneakersCardHover";

type Props = {
  data: Sneaker;
};

const SneakersCard: FC<Props> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredHove, setIsHoveredHove] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isHoveredHove) {
      setIsHovered(false);
    }
  };

  return (
    <div 
      key={data.id}
      className={style.container}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <img className={style.containerImg} src={data.imgUrl} alt={data.title} />
      <p>{data.title}</p>
      <span>{data.price} p</span>
      {isHovered && (
        <div 
          onMouseEnter={() => setIsHoveredHove(true)} 
          onMouseLeave={() => setIsHoveredHove(false)}
        >
          <SneakersCardHove data={data} key={data.id} />
        </div>
      )}
    </div>
  );
};

export default SneakersCard;
