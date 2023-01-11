import styles from "../styles/concerts.module.css";
import { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import Button from "@mui/material/Button";
import { orange, grey } from "@mui/material/colors";

export default function Concert() {
  const primary = grey[900];
  const secondary = orange[600];

  const [concert, setConcert] = useState([]);
  const getConcert = () => {
    axios.get("http://localhost:8001/concerts").then((response) => {
      setConcert(response.data);
    });
  };
  useEffect(() => {
    getConcert();
  }, []);
  return (
    <>
      <Header title="Афиша концертов" />
      <div className={styles.container}>
        {concert.map((item, index) => {
          return (
            <div key={item} className={styles.item}>
              <img className={styles.img} src={item.photoUrl} />
              <Button
                className={styles.item__button}
                sx={{
                  color: primary,
                  backgroundColor: secondary,
                  marginTop: 3,
                  borderRadius: 3,
                }}
                variant="contained"
                size="small"
              >
                <a href="/lk">Купить билеты </a>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
