import { useEffect, useState } from "react";
import styles from "../styles/films.module.css";
import Header from "../components/header";
import axios from "axios";
import Link from "next/link";
import Filter from "../components/filter";


export default function Films() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [film, setFilm] = useState([]);
  const getFilm = () => {
    axios.get("http://localhost:8001/fantasy").then((response) => {
      setFilm(response.data);
    });
  };
  useEffect(() => {
    getFilm();
  }, []);

  const [value, setValue] = useState("");

  const filteredFilm = film.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <Header title="Афиша фильмов" />
      <div className={styles.container}>
        <div className={styles.search}>
          <form className={styles.search__form}>
            <input
              type="text"
              placeholder="Поиск по названию"
              className={styles.search__input}
              onChange={(event) => setValue(event.target.value)}
            />
          </form>
          <Filter />
        </div>

        {filteredFilm.map((item, index) => {
          return (
            <div key={index} className={styles.poster}>
              <div className={styles.poster__img}>
                <img className={styles.img} src={item.photoUrl} alt="" />
              </div>
              <div className={styles.poster__info}>
                <h1 className={styles.poster__infoText}>{item.title}</h1>
                <p className={styles.p}>{item.description}</p>
                <h3 className={styles.genre}>Жанр: {item.genre}</h3>
                <h3 className={styles.date}>Дата выхода: {item.date}</h3>
                <Link href="/lk">
                  <a className={styles.account}>
                    <span>
                      <button className={styles.call__button}>
                        Войдите,чтобы купить билеты на <br />
                        {time}
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