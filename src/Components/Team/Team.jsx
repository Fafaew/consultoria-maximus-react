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
        <p className={styles.TeamDescription}>Contador com mais de 5 anos de experiência em perícias contábeis, prestando serviços de contabilidade para empresas dos mais diversos portes e setores de atuaçação, conta com total confiança dos seus clientes nas mais diversas áreas Contadora especializada em análises financeiras, econômicas e patrimoniais. Âmpla experiência na eloboração de livros e demonstrações contábeis, previsão de custos, receitas, dentre outros
        </p>
      </div>
      <div className={styles.teamWrapper}>
        <img src={JessicaImg} alt='Foto Contador' className={styles.teamImages} />
        <h2 className={styles.TeamSubtitle}>Jessica Ferreira </h2>
        <h5 className={styles.TeamSubtitle}>CRC/MG: 121.510 </h5>
        <p className={styles.TeamDescription}>Contador com mais de 5 anos de experiência em perícias contábeis, prestando serviços de contabilidade para empresas dos mais diversos portes e setores de atuaçação, conta com total confiança dos seus clientes nas mais diversas áreas Contadora especializada em análises financeiras, econômicas e patrimoniais. Âmpla experiência na eloboração de livros e demonstrações contábeis, previsão de custos, receitas, dentre outros
        </p>
      </div>
      <div className={styles.teamWrapper}>
        <img src={BlendaImg} alt='Foto Contador' className={styles.teamImages} />
        <h2 className={styles.TeamSubtitle}>Blenda Rodrigues </h2>
        <h5 className={styles.TeamSubtitle}>CRC/MG: 121.510 </h5>
        <p className={styles.TeamDescription}>Contador com mais de 5 anos de experiência em perícias contábeis, prestando serviços de contabilidade para empresas dos mais diversos portes e setores de atuaçação, conta com total confiança dos seus clientes nas mais diversas áreas Contadora especializada em análises financeiras, econômicas e patrimoniais. Âmpla experiência na eloboração de livros e demonstrações contábeis, previsão de custos, receitas, dentre outros
        </p>
      </div>
    </div>
  )
};

export default Team