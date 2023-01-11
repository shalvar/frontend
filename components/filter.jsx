import styles  from "../styles/filter.module.css";
import React from "react";import Link from "next/link";


export default function filter() {

    return (
      <div className={styles.filter}>
        <button className={styles.filter__button}>
          <Link href="/films">Все</Link>
        </button>
        <button className={styles.filter__button}>
          <Link href="/comedy">Комедии</Link>
        </button>
        <button className={styles.filter__button}>
          <Link href="/children's">Десткое</Link>
        </button>
        <button className={styles.filter__button}>
          <Link href="/fantasy">Фэнтези</Link>
        </button>
        <button className={styles.filter__button}>
          <Link href="/horror">Ужасы</Link>
        </button>
      </div>
    );
}