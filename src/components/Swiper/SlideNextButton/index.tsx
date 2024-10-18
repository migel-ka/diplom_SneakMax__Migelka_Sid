import { useSwiper } from 'swiper/react';
import ButtonThree from '../../button/buttonThree/index';

export default function SlideNextButton() {

  const swiper = useSwiper();
  const handleClick = () => {
    swiper.slideNext();
  };


  return (
    <ButtonThree text = "Следующий шаг" onClick={handleClick}/>
  );
}

