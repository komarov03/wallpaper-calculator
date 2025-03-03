import React, { useState } from "react";
import styles from "../styles/RollRaportParamaters.module.scss";

export function RollRaportParameters({ state, dispatch }) {
  const [selectedRoll, setSelectedRoll] = useState("10.6");
  const [selectedRaport, setSelectedRaport] = useState("0");

  const handleRollClick = (roll) => {
    setSelectedRoll(roll);
    dispatch({
      type: "SELECT_ROLL",
      payload: roll,
    });
  };

  const handleRaportClick = (raport) => {
    setSelectedRaport(raport);
    dispatch({
      type: "SELECT_RAPORT",
      payload: raport,
    });
  };

  return (
    <div className={styles.parameters__rollRapport}>
      <div className={styles.parameters__roll}>
        <h2 className={styles.parameters__text}>Параметры рулона</h2>
        <div className={styles.parameters__buttons}>
          <button
            className={[
              styles.parameters__button,
              styles.second,
              selectedRoll === "10.6" ? styles.active : "",
            ].join(" ")}
            onClick={() => handleRollClick("10.6")}
          >
            1.06 x 10м
          </button>
          <button
            className={[
              styles.parameters__button,
              styles.third,
              selectedRoll === "26.5" ? styles.active : "",
            ].join(" ")}
            onClick={() => handleRollClick("26.5")}
          >
            1.06 x 25м
          </button>
        </div>
      </div>
      <div className={styles.parameters__roll}>
        <h2 className={styles.parameters__text}>Раппорт</h2>
        <div className={styles.parameters__buttons}>
          <button
            className={[
              styles.parameters__button,
              styles.zero,
              selectedRaport === "0" ? styles.active : "",
            ].join(" ")}
            onClick={() => handleRaportClick("0")}
          >
            0
          </button>
          <button
            className={[
              styles.parameters__button,
              styles.second,
              selectedRaport === "0.32" ? styles.active : "",
            ].join(" ")}
            onClick={() => handleRaportClick("0.32")}
          >
            0.32м
          </button>
          <button
            className={[
              styles.parameters__button,
              styles.third,
              selectedRaport === "0.64" ? styles.active : "",
            ].join(" ")}
            onClick={() => handleRaportClick("0.64")}
          >
            0.64м
          </button>
        </div>
      </div>
    </div>
  );
}
