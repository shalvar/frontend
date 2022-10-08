import { useState } from "react";
import styles from "../styles/films.module.css";
import Header from "../components/header";

export default function Films() {
  const [films, setFilms] = useState([
    {
      title: "Молодой человек",
      description:
        " Ваня Ревзин к своим тридцати годам, несмотря на золотую медаль в школе и красный диплом МГУ, оказался на дне: жена ушла к КМС по боксу, с убогой работы в банке уволили, а до закрытия ипотеки за маленькую студию в человейнике — годы боли и страданий. В момент отчаяния Ива  узнает, что его ушлый одноклассник-двоечник Коля стал преуспевающим бизнесменом и объявил конкурс для старшеклассников с многомиллионным призовым фондом.",
      timetable: ["12:20"],
      photoUrl: "img/film1.jpg",
    },
    {
      title: "Последний богатырь корень зла",
      description:
        "  Во второй части зрители узнают об истоках древнего зла, с которым  героям пришлось столкнуться в первом фильме, увидят новые уголки сказочного Белогорья, и станут свидетелями захватывающих схваток с участием былинных богатырей.",
      timetable: ["11:40"],
      photoUrl: "img/film2.jpg",
    },
  ]);
  return (
    <>
      <Header title="Афиша сеансов" />
      <div className={styles.container}>
        {films.map((item, index) => {
          return (
            <div key={index} className={styles.poster}>
              <div className={styles.poster__img}>
                <img className={styles.img} src={item.photoUrl} alt="" />
              </div>
              <div className={styles.poster__info}>
                <h1 className={styles.poster__infoText}>{item.title}</h1>
                <p className={styles.p}>{item.description}</p>
                <div className={styles.timetable}>
                  {item.timetable.map((time, index) => {
                    return (
                      <button key={index} className={styles.timetable__button}>
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
