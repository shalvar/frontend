import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home() {
  const [films, setFilms] = useState([
    {
      title: "Афиша фильмов",
      description:
        " Здесь вы можете найти расписание сеансов всех актуальных фильмов",
      photoUrl: "img/fFilm.jpg",
      url: " /films",
    },
    {
      title: "Афиша концертов",
      description: "Любая музыка на любой вкус",
      photoUrl: "img/fConcert.jpg",
      url: "/concerts",
    },
  ]);
  return (
    <>
      <Header title="Афиша сеансов" />
      <div className={styles.container}>
        {films.map((item, index) => {
          return (
            <div className={styles.poster}>
              <a className={styles.poster__img} href={item.url}>
                <img className={styles.img} src={item.photoUrl} alt="" />
              </a>
              <div className={styles.poster__info}>
                <h1 className={styles.poster__infoText}>{item.title}</h1>
                <p className={styles.p}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
