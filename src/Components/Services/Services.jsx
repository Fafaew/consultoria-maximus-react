import React from 'react';
import styles from './Services.module.scss';
import { HiOutlineReceiptTax } from "react-icons/hi";
import { BiSpreadsheet } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { GiLion } from "react-icons/gi";
import { IoMdBook } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.title}>SERVIÇOS</div>
      <div className={styles.description}>A Maximus oferece diversos serviços na área contábil e tributária, dentre eles:</div>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesItem}>
          <HiOutlineReceiptTax className={styles.servicesIcon}/>
          <h2 className={styles.servicesTitle}>Consultoria Fiscal e Tributária</h2>
          <p className={styles.servicesDescription}>Análise de balanços, tributos e ordem com o fisco</p>
        </div>
        <div className={styles.servicesItem}>
          <BiSpreadsheet  className={styles.servicesIcon}/>
          <h2 className={styles.servicesTitle}>Gestão de Folha de Pagamentos</h2>
          <p className={styles.servicesDescription}>Planejamento de remunerações brutas e líquidas com detalhamento</p>
        </div>
        <div className={styles.servicesItem}>
          <FaPen className={styles.servicesIcon}/>
          <h2 className={styles.servicesTitle}>Registro e Legalização Empresarial</h2>
          <p className={styles.servicesDescription}>Implementação de legislações e técnicas contábeis de acordo com o tamanho da sua empresa</p>
        </div>
        <div className={styles.servicesItem}>
          <GiLion className={styles.servicesIcon}/>
          <h2 className={styles.servicesTitle}>Imposto de Renda</h2>
          <p className={styles.servicesDescription}>Cálculo e declaração para pessoa física e jurídica</p>
        </div>
        <div className={styles.servicesItem}>
          <IoMdBook className={styles.servicesIcon}/>
          <h2 className={styles.servicesTitle}>Auditoria</h2>
          <p className={styles.servicesDescription}>Exame de documentos, livros contábeis, registros e controle de patrimônio</p>
        </div>
        <div className={styles.servicesItem}>
          <AiOutlineFileSearch className={styles.servicesIcon}/>
          <h2 className={styles.servicesTitle}>Perícias</h2>
          <p className={styles.servicesDescription}>Identificação, laudos, síntese e desenvolvimento de metodologias</p>
        </div>
      </div>
      
    </div>
  )
}

export default Services