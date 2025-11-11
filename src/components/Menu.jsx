import styles from './Menu.module.css';
import MenuCard from './MenuCard';

const morningItems = [
  // Add 12 items here (update image paths/names accordingly)
  { name: 'Idli (2 pcs)', price: 20, image: '/images/idli.png' },
  { name: 'Ghee Karam Idli', price: 30, image: '/images/ghee-karam-idli.png' },
  { name: 'Chitti Idli (Ghee)', price: 30, image: '/images/chitti-idli.jpg' },
  { name: 'Vada', price: 30, image: '/images/vada.png' },
  { name: 'Dosa', price: 30, image: '/images/dosa.jpg' },
  { name: 'Ghee Dosa', price: 40, image: '/images/ghee-dosa.jpg' },
  { name: 'Onion Dosa', price: 40, image: '/images/masala-dosa.png' },
  { name: 'Pesarattu', price: 30, image: '/images/pesarattu.jpg' },
  { name: 'Upma Pesarattu', price: 40, image: '/images/upma-pesarattu.jpg' },
  { name: 'Mysore Bajji', price: 30, image: '/images/mysore-bajji.jpg' },
  { name: 'Pesara Punugu', price: 30, image: '/images/pesara-punugu.jpg' },
  { name: 'Minapa Punugu', price: 30, image: '/images/minapa-punugu.jpg' },
];

const eveningItems = [
  // 8 items here (update image paths/names accordingly)
  { name: 'Masala Dosa', price: 40, image: '/images/masala-dosa.png' },
  { name: 'Idli (2 pcs)', price: 20, image: '/images/idli.png' },
  { name: 'Chitti Idli(Ghee)', price: 30, image: '/images/chitti-idli.jpg' },
  { name: 'Ghee Karam Idli', price: 30, image: '/images/ghee-karam-idli.png' },
  { name: 'Chapathi', price: 30, image: '/images/chapathi.jpg' },
  { name: 'Ravva Dosa', price: 30, image: '/images/ravva-dosa.jpg' },
  { name: 'Uttapam', price: 30, image: '/images/uttapam.jpg' },
  { name: 'Onion Dosa', price: 40, image: '/images/masala-dosa.png' },
];

function Menu() {
  return (
    <section className={styles.menuSection} id="menu">
      <div className={styles.header}>
        <span className={styles.specialBadge}>⭐ Our Special Ghee Tiffins ⭐</span>
        <h2 className={styles.menuTitle}>Our Menu</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.session}>
        <h3 className={styles.sessionTitle}>Morning Session</h3>
        <span className={styles.time}>5 AM – 1 PM</span>
        <div className={styles.grid}>
          {morningItems.map((item, idx) => (
            <MenuCard key={item.name + idx} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.session}>
        <h3 className={styles.sessionTitle}>Evening Session</h3>
        <span className={styles.time}>4 PM – 10 PM</span>
        <div className={styles.grid}>
          {eveningItems.map((item, idx) => (
            <MenuCard key={item.name + idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Menu;
