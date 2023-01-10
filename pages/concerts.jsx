import styles from "../styles/concerts.module.css";
import { useState } from "react";
import Header from "../components/header";
import axios from "axios";
import Link from "next/link";

export default function Concert() {
  const [concert, setConcert] = useState([
    axios.get("http://localhost:8001/concerts")
    .then((response) => {
      setConcert(response.data);
    }),
  ]);
  return (
    <>
      <Header title="Афиша концертов" />
      <div className={styles.container}>
        {concert.map((item, index) => {
          return (
            <div key={item} className={styles.item}>
              <img className={styles.img} src={item.photoUrl} />
              <Link href="/lk">
                <a className={styles.account}>
                  <span>
                    <button className={styles.item__button}>
                      Войдите, чтобы купить билеты
                    </button>
                  </span>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
