import Nouislider from "nouislider-react";
import { FC } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormData } from "../FilterCalalog";


interface IProps  {
    setValue: UseFormSetValue<IFormData>;
    register: UseFormRegister<IFormData>;
  }
  
  const FilterPrice: FC<IProps> = ({ register, setValue }) => {
    return (
      <>
        <h4>Цена, руб</h4>
        <div className="filter">
          <input type="number" min={0} max={99999} {...register("startPrice")} />
          <input type="number" min={0} max={99999} {...register("endPrice")} />
          <Nouislider
            range={{ min: 0, max: 99999 }}
            start={[0, 99999]}
            orientation="horizontal"
            connect
            step={1}
            onChange={([start, end]) => {
              setValue("startPrice", Math.round(start));
              setValue("endPrice", Math.round(end));
            }}
          />
        </div>
      </>
    );
  };

  export default FilterPrice;