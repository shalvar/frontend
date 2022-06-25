import Header from "../components/header";
import styles from "../styles/lk.module.css";

export default function lk() {
  return (
    <div className={styles.bg}>
      <Header title="Личный кабинет" />

      <form className={styles.form} method="POST">
        <h1>Вход в личный кабинет</h1>
        <div className={styles.input__group}>
          <label for="login"></label>
          <input
            placeholder="Логин"
            type="text"
            name="login"
            required
            className={styles.form__login}
          />
        </div>

        <div className={styles.input__group}>
          <label for="password"></label>
          <input
            placeholder="Пароль"
            type="text"
            name="password"
            className={styles.form__password}
            required
          />
        </div>
        <button className={styles.form__sumbit} type="submit">
          <span className={styles.form__text}>Войти</span>
        </button>
      </form>
    </div>
  );
}
