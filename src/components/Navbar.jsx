import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  const [open, setOpen] = useState(false);

  // Toggle a class on body so we can increase top padding when mobile menu opens
  useEffect(() => {
    if (open) {
      document.body.classList.add('nav-menu-open');
    } else {
      document.body.classList.remove('nav-menu-open');
    }
    return () => {
      document.body.classList.remove('nav-menu-open');
    };
  }, [open]);

  return (
    <nav className={`${styles.navbar} ${open ? styles.open : ''}`}>
      <div className={styles.container}>
        <div className={styles.brand}>
        <img src="/logo.png" alt="Dosti Tiffins" className={styles.logo} />
        <div>
          <span className={styles.title}>Dosti Tiffins</span>
          <span className={styles.subtitle}>Serving the Taste of Friendship</span>
        </div>
      </div>

        {/* Desktop links */}
        <ul className={styles.links}>
        <li><button className={styles.linkBtn} onClick={() => { scrollToSection('about'); setOpen(false); }}>About</button></li>
        <li><button className={styles.linkBtn} onClick={() => { scrollToSection('menu'); setOpen(false); }}>Menu</button></li>
        <li><button className={styles.linkBtn} onClick={() => { scrollToSection('contact'); setOpen(false); }}>Contact</button></li>
      </ul>

        <a href="tel:+919999999999" className={styles.callNow}>Call Now</a>

        {/* Mobile menu toggle */}
        <button
          className={styles.menuToggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={styles.hamburger} />
        </button>
      </div>

      {/* Mobile menu dropdown (shown when open) */}
      <div className={styles.mobileMenu} role="menu" aria-hidden={!open}>
        <ul>
          <li><button className={styles.mobileLink} onClick={() => { scrollToSection('about'); setOpen(false); }}>About</button></li>
          <li><button className={styles.mobileLink} onClick={() => { scrollToSection('menu'); setOpen(false); }}>Menu</button></li>
          <li><button className={styles.mobileLink} onClick={() => { scrollToSection('contact'); setOpen(false); }}>Contact</button></li>
        </ul>
        <a href="tel:+919999999999" className={styles.callNowMobile}>Call Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
