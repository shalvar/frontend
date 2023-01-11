import { useEffect, useState } from "react";
import styles from "../styles/comment.module.css";
import Header from "../components/header";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Rating from "@mui/material/Rating";



export default function Comment() {

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
          <Rating
            sx={{
              marginBottom:2,
            }}
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
          />
          <Alert severity="info">
            <AlertTitle>Инфо</AlertTitle>
            Приносим извинения —{" "}
            <strong>добавление комментраиев временно недоступно</strong>
          </Alert>
        </div>

        {comment.map((item, index) => {
          return (
            <div key={index} className={styles.comments__item}>
              <div className={styles.comments__info}>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
                <Rating
                  name="read-only"
                  defaultValue={item.value}
                  precision={item.pre}
                  readOnly
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
