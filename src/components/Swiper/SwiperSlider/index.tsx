import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideNextButton from "../SlideNextButton";
import style from "./style.module.css";
import SNAKEIMG from "..//..//images/snakePhoto.jpg";
import Rectangle45 from "..//..//images/Rectangle45.png";

function SelectionSectionSwiper() {
  
    return (
        <>
           <Swiper className="mySwiper"> 
               <SwiperSlide>
                 <h2>Мы подберем идеальную пару для вас</h2>
                 <p className={style.mySwiperP}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями</p>
                 <h3 className={style.mySwiperH3}>Какой тип кроссовок рассматриваете?</h3>
                 <div className={style.mySwiperSectionImages}>
                  <div className={style.mySwiperSectionImage}>
                    <img src={SNAKEIMG} alt="SNAKEIMG" />
                    <label htmlFor=""> 
                      <input type="checkbox" id="scales" name="scales" />
                      кеды
                    </label>                  
                  </div>
                  <div className={style.mySwiperSectionImage}>
                    <img src={SNAKEIMG} alt="SNAKEIMG" />
                    <label htmlFor=""> 
                      <input type="checkbox" id="scales" name="scales" />
                      подкрадули
                    </label>                  
                  </div>
                  <div className={style.mySwiperSectionImage}>
                    <img src={SNAKEIMG} alt="SNAKEIMG" />
                    <label htmlFor=""> 
                      <input type="checkbox" id="scales" name="scales" />
                     кони
                    </label>                    
                  </div>
                  <div className={style.mySwiperSectionImage}>
                    <img src={SNAKEIMG} alt="SNAKEIMG" />
                    <label htmlFor=""> 
                      <input type="checkbox" id="scales" name="scales" />
                      бархатные тяги
                    </label>                  
                  </div>
                  <div className={style.mySwiperSectionImage}>
                    <img src={SNAKEIMG} alt="SNAKEIMG" />
                    <label htmlFor=""> 
                      <input type="checkbox" id="scales" name="scales" />
                      корсы
                    </label>                  
                  </div>
                  <div className={style.mySwiperSectionImage}>
                    <img src={SNAKEIMG} alt="SNAKEIMG" />
                    <label htmlFor=""> 
                      <input type="checkbox" id="scales" name="scales" />
                      макасы
                    </label>                   
                  </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <h2>Мы подберем идеальную пару для вас</h2>
                 <p className={style.mySwiperP}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями</p>
                 <h3 className={style.mySwiperH3}>Какой размер вам подойдет?</h3>
                 <div>
                  <div className={style.mySwiperChekbox}>
                      <label htmlFor=""> 
                        <input type="checkbox" id="scales" name="scales" />
                        менее 36
                      </label>
                      <label htmlFor=""> 
                        <input type="checkbox" id="scales" name="scales" />
                        36-38
                      </label>
                      <label htmlFor=""> 
                        <input type="checkbox" id="scales" name="scales" />
                        39-41
                      </label>
                      <label htmlFor=""> 
                        <input type="checkbox" id="scales" name="scales" />
                        42-44
                      </label>
                      <label htmlFor=""> 
                        <input type="checkbox" id="scales" name="scales" />
                        45 и больше
                      </label>
                  </div>
                  <div>
                    <img className={style.mySwiperChekboxImage} src={Rectangle45} alt="Rectangle45" />
                  </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <h2>Мы подберем идеальную пару для вас</h2>
                 <p className={style.mySwiperP}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями</p>
                 <h3 className={style.mySwiperH3}>Уточните какие-либо моменты</h3>
                 <input className={style.mySwiperInputText} type="text" name="" id="" placeholder="Введите сообщение"/>
               </SwiperSlide>
               <SwiperSlide>
                 <h2>Ваша подборка готова!</h2>
                 <p className={style.mySwiperP}>Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</p>
               </SwiperSlide>
               <SlideNextButton />
           </Swiper>
        </>
    )
  }
  
  export default SelectionSectionSwiper;
  