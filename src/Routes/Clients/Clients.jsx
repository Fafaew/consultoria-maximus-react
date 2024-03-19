import React from 'react';
import styles from './Clients.module.scss';
import companyLogo from '../../Assets/Img/ClientsLogo/companyLogo.png'


const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
      <div className={styles.title}>Clientes</div>

      <div className={styles.clientsWrapper}>
        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

        <div className={styles.clientLogo}>
          <img className={styles.companyImage} src={companyLogo} alt="Logo Empresa"/>
        </div>

      </div>
    </div>
  )
}

export default Clients