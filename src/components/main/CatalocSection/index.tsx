import { FC } from "react";
import SneakersCards from "../../Catalog/SneakersCards";
import style from "./style.module.css";

interface Props {
  filterValue: string; 
}

const CatalocSection: FC<Props> = ({ filterValue }) => {
  
    return (
      <section className={style.container}>
        <h2>Каталог</h2>
        <div>
          <div></div>
          <div>
            <SneakersCards filterValue={filterValue}/>
          </div>
        </div>
      </section>
    )
  }
  
  export default CatalocSection;
  