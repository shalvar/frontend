import { useState } from "react";
import styles from "../styles/concerts.module.css";
import Header from "../components/header";

export default function concerts() {
  const [films, setConcerts] = useState([
    {
      title: "Баста",
      photoUrl: "img/basta.jpg",
    },
    {
      title: "Тимати",
      photoUrl: "img/timati.jpg",
    },
    {
      title: "JONY",
      photoUrl: "img/jony.jpg",
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
                <img className={styles.img} src={item.photoUrl} alt="" />
              </div>

              <div className={styles.poster__info}>
                <h1 className={styles.poster__infoText}>{item.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
