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
    <>
     <Header title="Отзывы" />
    <div className={styles.container}>
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
                <button className={styles.comments__button} onClick={click}>Оставить отзыв</button>
              </div>
           
        {comment.map((item, index) => { 
          return (
            <div key={index} className={styles.comments__item}>
              <div className={styles.comments__info}>
                <h2 >{item.name}</h2>
                <p >{item.text}</p>
              </div>
      </div>
  );
}
)}
</div>
</>
);
}
