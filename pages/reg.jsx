import Header from "../components/header";
import styles from "../styles/reg.module.css";

export default function reg() {
  return (
    <div className={styles.container}>
      <Header title="Регистрация" />

      <form className={styles.form} method="POST">
        <h1>Регистрация</h1>
        <div className={styles.input__group}>
          <label for="email"></label>
          <input
            placeholder="Почта"
            type="email"
            name="email"
            required
            className={styles.form__email}
          />
        </div>
        <div className={styles.input__group}>
          <label for="first-name"></label>
          <input
            placeholder="Имя"
            type="text"
            name="first-name"
            className={styles.form__firstName}
          />
        </div>
        <div className={styles.input__group}>
          <label for="last-name"></label>
          <input
            placeholder="Фамилия"
            type="text"
            name="last-name"
            className={styles.form__lastName}
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
          <span className={styles.form__text}>Зарегистрироваться</span>
        </button>
      </form>
    </div>
  );
}
