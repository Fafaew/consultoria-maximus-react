import React from 'react';
import styles from './Team.module.scss';
import LucasImg from '../../Assets/TeamImages/LucasImg.png';
import JessicaImg from '../../Assets/TeamImages/JessicaImg.png';
import BlendaImg from '../../Assets/TeamImages/BlendaImg.png';

const Team = () => {;
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.title}>CONTADORES RESPONSÁVEIS</h1>
      <div className={styles.teamWrapper}>
        <img src={LucasImg} alt='Foto Contador' className={styles.teamImages} />
        <h2 className={styles.TeamSubtitle}>Lucas Lopes </h2>
        <h5 className={styles.TeamSubtitle}>CRC/MG: 121.510 </h5>
        <p className={styles.TeamDescription}>Com mais de 5 anos de experiência em perícias contábeis, Lucas é reconhecido por sua habilidade em resolver questões complexas de contabilidade para empresas de diferentes portes e setores. Seu compromisso com a excelência e sua capacidade de adaptabilidade garantem que ele se destaque no mercado. Além disso, sua reputação é construída sobre a confiança sólida que seus clientes depositam nele para lidar com suas necessidades contábeis mais desafiadoras.
        </p>
      </div>
      <div className={styles.teamWrapper}>
        <img src={JessicaImg} alt='Foto Contador' className={styles.teamImages} />
        <h2 className={styles.TeamSubtitle}>Jessica Ferreira </h2>
        <h5 className={styles.TeamSubtitle}>CRC/MG: 121.510 </h5>
        <p className={styles.TeamDescription}> Especializada em análises financeiras, econômicas e patrimoniais, Jéssica traz consigo uma vasta experiência na elaboração de livros contábeis e demonstrações financeiras. Seu conhecimento aprofundado e sua visão estratégica permitem que ela antecipe tendências e forneça insights valiosos para seus clientes. Além disso, sua capacidade de comunicação eficaz a torna uma parceira indispensável para aqueles que buscam uma abordagem proativa para a gestão financeira.
        </p>
      </div>
      <div className={styles.teamWrapper}>
        <img src={BlendaImg} alt='Foto Contador' className={styles.teamImages} />
        <h2 className={styles.TeamSubtitle}>Blenda Rodrigues </h2>
        <h5 className={styles.TeamSubtitle}>CRC/MG: 121.510 </h5>
        <p className={styles.TeamDescription}>Com uma abordagem versátil e abrangente da contabilidade, Blenda é uma profissional multifacetada que domina uma variedade de habilidades contábeis. Seja lidando com perícias contábeis ou analisando dados financeiros complexos, sua experiência e expertise garantem resultados consistentes e confiáveis. Seus clientes confiam em sua capacidade de oferecer soluções personalizadas para suas necessidades específicas, estabelecendo assim uma parceria duradoura e frutífera.
        </p>
      </div>
    </div>
  )
};

export default Team