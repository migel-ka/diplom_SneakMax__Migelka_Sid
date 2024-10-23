import { FC } from "react";
import { IFormData } from "../FilterCalalog";
import { UseFormSetValue } from "react-hook-form";

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const genders = [
  {
    value: "Мужской",
    label: "male",
  },
  {
    value: "Женский",
    label: "female",
  },
];

const FilterGender: FC<IProps> = ({ setValue }) => {
  return (
    <>
      <h4>Пол</h4>
      <div className="filter">
        {genders.map((gender) => (
          <div key={gender.label}>
            <input
              type="radio"
              id={gender.label}
              name="gender"
              onChange={() => setValue("gender", gender.value)}
            />
            <label htmlFor={gender.label}>{gender.value}</label>
          </div>
        ))}
      </div>
    </>
  );
};


export default FilterGender;
