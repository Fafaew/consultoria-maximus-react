import { useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from './Slider-data';


const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  function autoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return() => clearInterval(slideInterval);
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [])

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}/>
      <AiOutlineArrowRight className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}/>

      {sliderData.map((slide, index) => {
        return (
          <div className={index === currentSlide ? `${styles.slide} ${styles.current}` : `${styles.slide}`} key={index}>
            {index === currentSlide && (
              <>
                <img className={styles.slideImage} src={slide.image} alt="slide" />
                <div className={styles.content}>
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className={`${styles.button} ${styles.buttonPrimary}`}> Get Started</button>
                </div>
              </>
            )}

          </div>
        )
      })}

    </div>
  )
}

export default Slider