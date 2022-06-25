import { useState } from "react";
import styles from "../styles/concerts.module.css";
import Header from "../components/header";

export default function concerts() {
  const [films, setConcerts] = useState([
    {
      title: "Баста",
      description: "Ледовый дворец ",
      photoUrl: "",
    },
    {
      title: "Тимати",
      description: "Олимпийский",
      photoUrl: "",
    },
  ]);

  return (
    <>
      <Header title="Афиша концертов" />;
      <div className={styles.container}>
        {films.map((item, index) => {
          return (
            <div className={styles.poster}>
              <div className={styles.poster__img}>
                <a href={item.url}>
                  <img className={styles.img} src={item.photoUrl} alt="" />
                </a>
              </div>
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
