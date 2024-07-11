import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className='{styles.contact_Form}'>
            <Button/>
        </div>
        <div className='{styles.contact_Image}'></div>
    </section>
  )
}

export default ContactForm