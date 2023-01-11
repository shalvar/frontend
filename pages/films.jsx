import { useEffect, useState } from "react";
import styles from "../styles/films.module.css";
import Header from "../components/header";
import axios from "axios";
import Filter from "../components/filter";
import Button from "@mui/material/Button";
import { orange, grey } from "@mui/material/colors";

export default function Films() {
  const primary = grey[900];
  const secondary = orange[600];

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [film, setFilm] = useState([]);
  const getFilm = () => {
    axios.get("http://localhost:8001/films").then((response) => {
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
          <Filter className={styles.filter} />
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
                <div className={styles.account}>
                  <Button
                    sx={{
                      color: primary,
                      backgroundColor: secondary,
                      marginRight: 10,
                      marginTop: 3,
                      borderRadius: 3,
                    }}
                    variant="contained"
                    size="small"
                    className={styles.buy__button}
                  >
                    <a href="/lk">
                      Купить билеты на <br /> {time}
                    </a>
                  </Button>

                  <Button
                    sx={{
                      color: primary,
                      backgroundColor: secondary,
                      marginTop: 3,
                      borderRadius: 3,
                    }}
                    variant="contained"
                    size="small"
                    className={styles.comment__button}
                  >
                    <a href="/comment">
                      Оставить отзыв
                      <br />о фильме
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
