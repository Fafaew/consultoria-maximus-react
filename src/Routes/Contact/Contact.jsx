import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


import EmailForm from '../../Components/EmailForm/EmailForm';
import styles from './Contact.module.scss';

const index = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactWrapper}>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <IoLocationSharp />
            </div>
            <div className={styles.contactInformation}>
              <h2 className={styles.contactSubtitle}>Endereço</h2>
              <p>Rua Teixeira Soares nº 948 Santa Teresa</p>
              <p>Belo Horizonte - MG</p>
              <p>CEP: 31015-040</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <MdEmail />
            </div>
            <div className={styles.contactInformation}>
              <h2 className={styles.contactSubtitle}>Email</h2>
              <p>contato@consultoriamaximus.com.br</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <FaPhoneAlt />
            </div>
            <div className={styles.contactInformation}>
              <h2 className={styles.contactSubtitle}>Telefone</h2>
              <p>(31)98472-0476</p>
            </div>
          </div>

        </div>

        <EmailForm />
      </div>
    </>
  )
}

export default index