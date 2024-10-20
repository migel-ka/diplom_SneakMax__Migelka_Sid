import React, { useState } from 'react';
import SliderPrise from "../feature/nouislider";
import style from "./style.module.css";
import ButtonTwo from "../button/buttonTwo/index";

const FilterCalalog = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event: any) => {
        setSelectedGender(event.target.value);
    };

    const handleApplyFilters = () => {
        console.log('Выбранный пол:', selectedGender);
    };

    return (
        <div className={style.container}>
            <h3>Подбор по параметрам</h3>
            <div>
                <p className={style.containerStep}>Цена, руб</p>
                <SliderPrise />
            </div>
            <div>
                <p className={style.containerStep}>Пол</p>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={selectedGender === 'male'} 
                            onChange={handleGenderChange} 
                        /> Мужчина
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={selectedGender === 'female'} 
                            onChange={handleGenderChange} 
                        /> Женщина
                    </label>
                </div>
            </div>
            <div>
                <p className={style.containerStep}>Размер</p>
            </div>
            <ButtonTwo text="Применить" onClick={handleApplyFilters} />
        </div>
    );
};

export default FilterCalalog;
