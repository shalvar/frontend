import { useEffect, useState } from "react";
import styles from "../styles/comment.module.css";
import Header from "../components/header";
import axios from "axios";

export default function Comment() {
  function click() {
    alert("Добавление отзывов временно недоступно");
  }

  const [comment, setComment] = useState([]);
  const getComment = () => {
    axios.get("http://localhost:8001/comments").then((response) => {
      setComment(response.data);
    });
  };
  useEffect(() => {
    getComment();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <Header title="Отзывы" />
          <div className={styles.comments__form}>
                <h2 className={styles.comments__title}>Оставить отзыв</h2>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className={styles.comments__input}
                />
                <input
                  type="text"
                  placeholder="Ваш отзыв"
                  className={styles.comments__input}
                />
                <button onClick={click}>Оставить отзыв</button>
              </div>
            </div>
        {comment.map((item, index) => {
          return (
            <div key={index} className={styles.comments__item}>
              <div className={styles.comments__info}>
                <h2 className={styles.comments__name}>{item.name}</h2>
                <p className={styles.comments__text}>{item.text}</p>
              </div>
      </div>
  );
}
)}
</div>
);
}
