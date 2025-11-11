import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Us</h2>
      <div className={styles.underline}></div>
      <div className={styles.contentRow}>
        <div className={styles.description}>
          Dosti Tiffins brings the warmth of friendship into every meal. We serve freshly prepared, hygienic, and delicious South Indian tiffins made with pure ghee and love.<br/>
          Our mission is to make every bite feel like home — healthy, tasty, and made with care.
          <div className={styles.badges}>
            <span className={styles.badge + " " + styles.badgeLove}>Made with Love</span>
            <span className={styles.badge + " " + styles.badgeGhee}>Pure Ghee</span>
            <span className={styles.badge + " " + styles.badgeFresh}>Fresh Daily</span>
          </div>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureTitle}>100%</span>
            <span className={styles.featureSubtitle}>Pure Ghee</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureTitle}>Fresh</span>
            <span className={styles.featureSubtitle}>Daily</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureTitle}>Hygienic</span>
            <span className={styles.featureSubtitle}>Kitchen</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureTitle}>5★</span>
            <span className={styles.featureSubtitle}>Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
