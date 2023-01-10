import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../pages/_app";

export default function Header({ title }) {
  const userContext = useContext(UserContext);

  return (
    <header>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.main}>
              <svg
                className={styles.svg}
                height="70"
                width="100"
                viewBox="50 65 80 85"
              >
                <path
                  className={styles.logo__svg}
                  fill="white"
                  d="M75.83,149.32a49.77,49.77,0,0,1-13.4-1.74l-32.7.55.07-9.54,16.27-.27c-22.52-22-11.61-69.26,28.86-69.26C127.46,69.06,127.13,149.32,75.83,149.32ZM56.11,93.78c-12.84-3.44-18.69,15.93-5,19.6C63.58,116.73,68.9,97.21,56.11,93.78Zm37,30.86c12.49,3.35,17.8-16.17,5-19.6S79.45,121,93.13,124.64ZM82.76,78.39C69.92,75,64.07,94.33,77.74,98,90.23,101.34,95.55,81.82,82.76,78.39Zm-8.27,25.34c-7.18,0-7.53,10.93.12,10.93C81.59,114.66,81.64,103.73,74.49,103.73Zm-2.93,16.46c-12.84-3.44-18.69,15.93-5,19.6C79,143.13,84.35,123.62,71.56,120.19Z"
                />
              </svg>
              <h3 className={styles.logo__text}>АФИША</h3>
            </a>
          </Link>
        </div>
        <Link href="/lk">
          {userContext?.user ? (
            <span className={styles.account__button}>
              {userContext?.user?.first_name}
            </span>
          ) : (
            <a className={styles.account}>
              <span className={styles.account__button}>Войти в кабинет</span>
            </a>
          )}
        </Link>
      </div>
      <div className={styles.banner}>
        <h1 className={styles.banner__text}>{title}</h1>
      </div>
    </header>
  );
}
