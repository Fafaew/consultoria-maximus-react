import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Slider.module.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from './Slider-data';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const slideIntervalRef = useRef(null);
  const intervalTime = 5000;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  }

  const nextSlide = useCallback(() => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, slideLength]);

  const autoSlide = useCallback(() => {
    slideIntervalRef.current = setInterval(nextSlide, intervalTime);
  }, [nextSlide, intervalTime]);

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideIntervalRef.current);
  }, [autoScroll, autoSlide, currentSlide]);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}/>
      <AiOutlineArrowRight className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}/>

      {sliderData.map((slide, index) => (
        <div className={index === currentSlide ? `${styles.slide} ${styles.current}` : `${styles.slide}`} key={index}>
          {index === currentSlide && (
            <div className={styles.slidesContainer}>
              <img className={styles.slideImage} src={slide.image} alt="slide" />
              <div className={styles.content}>
                <h2>{slide.heading}</h2>
                <p>{slide.desc}</p>
                <hr  className={styles.horizontalRow}/>
                <button className={`${styles.button} ${styles.buttonPrimary}`}> Mais </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Slider;
