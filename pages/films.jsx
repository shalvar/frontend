import { useState } from "react";
import styles from "../styles/films.module.css";
import Header from "../components/header";
import axios from "axios";
import Link from "next/link";

export default function Films() {
  const [film, setFilm] = useState([
    axios.get("http://localhost:8001/films").then((response) => {
      setFilm(response.data);
    }),
  ]);
  return (
    <>
      <Header title="Афиша сеансов" />
      <div className={styles.container}>
        {film.map((item, index) => {
          return (
            <div key={index} className={styles.poster}>
              <div className={styles.poster__img}>
                <img className={styles.img} src={item.photoUrl} alt="" />
              </div>
              <div className={styles.poster__info}>
                <h1 className={styles.poster__infoText}>{item.title}</h1>
                <p className={styles.p}>{item.description}</p>
                <Link href="/lk">
                  <a className={styles.account}>
                    <span>
                      <button className={styles.call__button}>
                        Войдите,чтобы купить билеты на <br />
                        {item.timetable}
                      </button>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
