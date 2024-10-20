import { FC, useEffect, useState } from 'react';
import SneakerCard from '../SneakersCard/index';
import style from "./style.module.css";
import { Sneaker } from '../../type/sneaker';
import ButtonOne from '../../button/button';
import Loader from '../../Loader';
import NotFound from '../../pages/NotFound';

type Props = {
  filterValue: string;
}

const SneakersCards: FC<Props> = ({ filterValue }) => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch('https://57ebb7d934c23933.mokky.dev/sneakers');
      const data = await response.json();
      setSneakers(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredSneakers = filterValue
    ? sneakers.filter(item => item.title.includes(filterValue))
    : sneakers;

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 6); 
  };

  return (
    <div 
    id="catalog"
    className={style.containerGrid}>
      {isLoading && <Loader />}
      {isError && <NotFound />}
      {filteredSneakers.slice(0, visibleCount).map(sneaker => (
        <SneakerCard data={sneaker} key={sneaker.id} />
      ))}
      {visibleCount < filteredSneakers.length && ( 
        <ButtonOne text="Показать ещё" onClick={handleShowMore} />  
      )}
    </div>
  );
}

export default SneakersCards;
