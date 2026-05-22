import styles from "./AppCard.module.css";

export function AppCard({
  title,
  img,
  price,
  description,
  category,
  platforms,
}) {
  return (
    <article className={styles.appCard}>
      <div className={styles.appIcon}>
        <img src={img} alt={title} className={styles.image} />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <span className={styles.price}>{price}</span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.cardFooter}>
          <span className={styles.category}>{category}</span>
          <span className={styles.platforms}>{platforms.join(" · ")}</span>
        </div>
      </div>
    </article>
  );
}
