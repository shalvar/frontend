import styles from "../styles/concerts.module.css";
import { useState } from "react";
import Header from "../components/header";

export default function Concert() {
  const [concerts, setConcerts] = useState([
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
      <Header title="Афиша концертов" />
      <div className={styles.container}>
        {concerts.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <img className={styles.img} src={item.photoUrl} />
              <h1 className={styles.itemText}>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
