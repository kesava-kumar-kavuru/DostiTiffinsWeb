import styles from './Navbar.module.css';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img src="/logo.png" alt="Dosti Tiffins" className={styles.logo} />
        <div>
          <span className={styles.title}>Dosti Tiffins</span>
          <span className={styles.subtitle}>Serving the Taste of Friendship</span>
        </div>
      </div>
      <ul className={styles.links}>
        <li><button className={styles.linkBtn} onClick={() => scrollToSection('about')}>About</button></li>
        <li><button className={styles.linkBtn} onClick={() => scrollToSection('menu')}>Menu</button></li>
        <li><button className={styles.linkBtn} onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
      <a href="tel:+919999999999" className={styles.callNow}>Call Now</a>
    </nav>
  );
}
export default Navbar;
