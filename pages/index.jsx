import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home() {
  const [main, setMain] = useState([
    {
      title: "Афиша фильмов",
      description: " Расписание сеансов всех актуальных фильмов",
      photoUrl: "img/Film.jpg",
      url: " /films",
    },
    {
      title: "Афиша концертов",
      description: "Любая музыка на любой вкус",
      photoUrl: "img/Concert.jpg",
      url: "/concerts",
    },
  ]);
  return (
    <>
      <Header title="Афиша сеансов" />
      <div className={styles.container}>
        {main.map((item, index) => {
          return (
            <div key={index} className={styles.poster}>
              <Link href={item.url}>
                <a className={styles.poster__img}>
                  <img className={styles.img} src={item.photoUrl} alt="" />
                </a>
              </Link>
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
