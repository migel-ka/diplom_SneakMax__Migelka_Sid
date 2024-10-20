import { FC } from "react";
import SneakersCards from "../../Catalog/SneakersCards";
import style from "./style.module.css";
import FilterCalalog from "../../FilterCalalog";

interface Props {
  filterValue: string; 
}

const CatalocSection: FC<Props> = ({ filterValue }) => {
  
    return (
      <section className={style.container}>
        <h2>Каталог</h2>
        <div className={style.containerFilterCatalog}>
          <div> 
            <FilterCalalog />
          </div>
          <div>
            <SneakersCards filterValue={filterValue}/>
          </div>
        </div>
      </section>
    )
  }
  
  export default CatalocSection;
  