import React from 'react';
import styles from './OtherServices.module.scss';
import { RiGovernmentLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbReceiptTax } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { GiMagnifyingGlass  } from "react-icons/gi";
import { MdOutlineBusinessCenter } from "react-icons/md";

const OtherServices = () => {
  return (
    <div>
      <h2 className={styles.title}>
        OUTROS SERVIÇOS
      </h2>
      <div className={styles.otherServicesContainer}>
        <div className={styles.otherServicesWrapper}>
          <div className={styles.otherServicesItem}>
            <RiGovernmentLine  className={styles.otherServicesIcon}/>
            <h4 className={styles.otherServicesSubtitle}>Consultoria Fiscal</h4>
          </div>
          <div className={styles.otherServicesItem}>
            <TbReceiptTax className={styles.otherServicesIcon}/>
            <h4 className={styles.otherServicesSubtitle}>Consultoria Tributária</h4>
          </div>
          <div className={styles.otherServicesItem}>
            <GiMagnifyingGlass className={styles.otherServicesIcon}/>
            <h4 className={styles.otherServicesSubtitle}>Auditoria</h4>
          </div>
          <div className={styles.otherServicesItem}>
            <MdOutlineBusinessCenter className={styles.otherServicesIcon}/>
            <h4 className={styles.otherServicesSubtitle}>Perícia Jurídica</h4>
          </div>
          <div className={styles.otherServicesItem}>
            <RiMoneyDollarCircleLine className={styles.otherServicesIcon}/>
            <h4 className={styles.otherServicesSubtitle}>Gestão de Folha de Pagamentos</h4>
          </div>
          <div className={styles.otherServicesItem}>
            <TfiWrite className={styles.otherServicesIcon}/>
            <h4 className={styles.otherServicesSubtitle}>Registro e Legalização Empresarial</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherServices