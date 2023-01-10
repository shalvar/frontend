import Header from "../components/header";
import styles from "../styles/reg.module.css";
import request from "../lib/request";
import { useState } from "react";
import axios from "axios";

export default function Reg() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      email: event.target.email.value,
      password: event.target.password.value,
      first_name: event.target["first-name"].value,
      last_name: event.target["last-name"].value,
    };
    axios.post("http://localhost:8001/users",values)
      .then((res) => {
        alert("Вы успешно зарегистрировались. Теперь вы можете войти.");
      })
  
  };

  return (
    <div className={styles.container}>
      <Header title="Регистрация" />

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <div className={styles.input__group}>
          <label htmlFor="email"></label>
          <input
            placeholder="Почта"
            type="email"
            name="email"
            required
            className={styles.form__email}
          />
        </div>
        <div className={styles.input__group}>
          <label htmlFor="first_name"></label>
          <input
            placeholder="Имя"
            type="text"
            name="first-name"
            className={styles.form__firstName}
          />
        </div>
        <div className={styles.input__group}>
          <label htmlFor="last_name"></label>
          <input
            placeholder="Фамилия"
            type="text"
            name="last-name"
            className={styles.form__lastName}
          />
        </div>

        <div className={styles.input__group}>
          <label htmlFor="password"></label>
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
