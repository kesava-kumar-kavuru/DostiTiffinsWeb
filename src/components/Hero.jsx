import styles from './Hero.module.css';

function scrollToMenu() {
  const el = document.getElementById('menu');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroLogoWrap}>
        <img src="/images/hero-logo.png" alt="Dosti Tiffins Hero" className={styles.heroLogo} />
        <span className={styles.logoTag}>
          <span className={styles.tagIcon}>✨</span>
          Pure Ghee
        </span>
      </div>
      <h1 className={styles.heading}>Dosti Tiffins</h1>
      <h2 className={styles.tagline}>Serving the Taste of Friendship</h2>
      <p className={styles.description}>
        Fresh, hygienic, and delicious South Indian tiffins made with pure ghee and love
      </p>
      <button className={styles.menuBtn} onClick={scrollToMenu}>View Our Menu</button>
    </section>
  );
}
export default Hero;
