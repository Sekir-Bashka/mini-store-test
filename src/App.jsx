import styles from './App.module.css'

export default function App() {
  return (
    <main>
      <h1 className={styles.header}>MiniStore</h1>

      <section>
        <h3>Приложения</h3>
        
        <article className={styles.article}>
          <h4>Приложение 1</h4>
          <p>Эта че</p>
        </article>

        <article className={styles.article}>
          <h4>Приложение 2</h4>
          <p>Моя говорящая Леля</p>
        </article>
      </section>

      <section>
        <article>
          О нашем сайте.<p>asass</p>
        </article>
      </section>
    </main>
  );
}
