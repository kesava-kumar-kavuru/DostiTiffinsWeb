import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>Visit Us</h2>
      <div className={styles.underline}></div>
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <span className={styles.icon}>📍</span>
          <span className={styles.title}>Location</span>
          <span className={styles.text}>Panja Centre<br/>Narasapuram, 534275</span>
        </div>
        <div className={styles.infoCard}>
          <span className={styles.icon}>📞</span>
          <span className={styles.title}>Phone</span>
          <span className={styles.text}>+91 9381358984</span>
        </div>
        <div className={styles.infoCard}>
          <span className={styles.icon}>🕒</span>
          <span className={styles.title}>Hours</span>
          <span className={styles.text}>
            Morning: 5 AM – 1 PM<br/>Evening: 4 PM – 10 PM
          </span>
        </div>
      </div>
      <div className={styles.buttonRow}>
        <a href="https://wa.me/919381358984" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>Order on WhatsApp</a>
        <a href="mailto:dosti.tiffins@gmail.com" className={styles.emailBtn}>Email Us</a>
      </div>
      <div className={styles.socialRow}>
        <a href="https://instagram.com/p/DQqY1JoEkJH/?igsh=ajZ3c3l1bGh2eGMy" target="_blank" rel="noopener noreferrer" className={styles.instaLink}>
          <span role="img" aria-label="Instagram">📷</span> Follow us on Instagram
        </a>
      </div>
      <p className={styles.instructions}>
        Connect with us for orders, updates, and delicious food photos
      </p>
    </section>
  );
}
export default Contact;
