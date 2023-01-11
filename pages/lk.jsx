import Header from "../components/header";
import styles from "../styles/lk.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import { orange, grey } from "@mui/material/colors";


export default function Lk() {
   const primary = grey[900];
   const secondary = orange[600];
  return (
    <div>
      <Header title="Личный кабинет" />

      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1>Вход в личный кабинет</h1>
        <div className={styles.input__group}>
          <label htmlFor="login"></label>
          <input
            placeholder="Логин"
            type="email"
            name="email"
            id="email"
            required
            className={styles.form__login}
          />
        </div>

        <div className={styles.input__group}>
          <label htmlFor="password"></label>
          <input
            placeholder="Пароль"
            type="password"
            name="password"
            className={styles.form__password}
            required
          />
          <div className={styles.registration}>
            <Link href="/reg">
              <a className={styles.registration__link}>Регистрация</a>
            </Link>
          </div>
        </div>
        <Button
          sx={{
            color: primary,
            backgroundColor: secondary,
            marginTop: 1,
            borderRadius: 3,
          }}
          variant="contained"
          size="small"
          className={styles.form__sumbit}
          type="submit"
        >
          <span className={styles.form__text}>Войти</span>
        </Button>
      </form>
    </div>
  );
}
