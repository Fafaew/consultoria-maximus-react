import React from 'react';
import styles from './About.module.scss';
import logo from '../../Assets/Img/logo.png';
import { IoCheckmarkDone } from "react-icons/io5";


const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.title}>SOBRE NÓS</div>
      <div className={styles.aboutWrapper}>
        <div className={styles.subtitle}>UMA HISTÓRIA DE SUCESSO</div>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt='Maximus Logo' />
        </div>
        <div className={styles.aboutDescription}>
          Fundada em 2019, a Maximus atua com empresas nacionais, multinacionais de diversos portes e segmentos, além de contar com um time engajado com âmpla experiência em Cálculos Judiciais, Gestão de Riscos, Contabilidade, Consultoria Tributária e mais!
        </div>
        <ul className={styles.aboutTopics}>
          <li className={styles.aboutItems}><IoCheckmarkDone className={styles.checkmark}/> Equipe engajada formada por profissionais qualificados</li>
          <li className={styles.aboutItems}><IoCheckmarkDone className={styles.checkmark}/> Foco na geração de resultados com simplicidade</li>
          <li className={styles.aboutItems}><IoCheckmarkDone className={styles.checkmark}/> Atuação em todo o território nacional</li>
          <li className={styles.aboutItems}><IoCheckmarkDone className={styles.checkmark}/> Satisfação garantida aliada a um orçamento que cabe no seu bolso</li>
        </ul>
      </div>
    </div>
  )
}

export default About