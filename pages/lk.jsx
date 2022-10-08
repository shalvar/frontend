import Header from "../components/header";
import styles from "../styles/lk.module.css";
import Link from "next/link";
import request from "../lib/request.js";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./_app";

export default function Lk() {
  const userContext = useContext(UserContext);
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    await request("/auth/login/", "POST", values)
      .then((res) => {
        setError(null);
        localStorage.setItem("access", res.access);
        userContext.updateUser();
      })
      .catch((err) => {
        console.log(err);
        setError(
          err.status === 401 ? "Неправильный логин или пароль" : err.message
        );
      });
  };

  return (
    <div>
      <Header title="Личный кабинет" />

      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1>Вход в личный кабинет</h1>
        {error && <p className={styles.error}>{error}</p>}
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
        <button className={styles.form__sumbit} type="submit">
          <span className={styles.form__text}>Войти</span>
        </button>
      </form>
    </div>
  );
}
