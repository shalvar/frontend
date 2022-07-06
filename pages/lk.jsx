import Header from "../components/header";
import styles from "../styles/lk.module.css";
import Link from "next/link";

export default function lk() {
  return (
    <div>
      <Header title="Личный кабинет" />

      <htmlForm className={styles.htmlForm} method="POST">
        <h1>Вход в личный кабинет</h1>
        <div className={styles.input__group}>
          <label htmlFor="login"></label>
          <input
            placeholder="Логин"
            type="text"
            name="login"
            required
            className={styles.htmlForm__login}
          />
        </div>

        <div className={styles.input__group}>
          <label htmlFor="password"></label>
          <input
            placeholder="Пароль"
            type="text"
            name="password"
            className={styles.htmlForm__password}
            required
          />
          <div className={styles.registration}>
            <Link href="/reg">
              <a className={styles.registration__link}>Регистрация</a>
            </Link>
          </div>
        </div>
        <button className={styles.htmlForm__sumbit} type="submit">
          <span className={styles.htmlForm__text}>Войти</span>
        </button>
      </htmlForm>
    </div>
  );
}
