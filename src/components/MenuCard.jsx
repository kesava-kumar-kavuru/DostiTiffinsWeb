import styles from './MenuCard.module.css';

function MenuCard({ name, price, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.img} />
      <div className={styles.footer}>
        <span className={styles.itemName}>{name}</span>
        <span className={styles.price}>₹{price}</span>
      </div>
    </div>
  );
}
export default MenuCard;
