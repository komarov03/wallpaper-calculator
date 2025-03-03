import styles from "../styles/Results.module.scss";

export function Results({ state, dispatch }) {
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div id="results" className={styles.results}>
      <div className={styles.results__block}>
        <h1 className={styles.results__title}>Результаты</h1>
        <div className={styles.results__data}>
          <div className={styles.results__unit}>
            <span className={styles.results__number}>
              {state.calculatedResults.rolls
                ? state.calculatedResults.rolls
                : 0}
            </span>
            <p className={styles.results__text}>Кол-во рулонов</p>
          </div>
          <div className={styles.results__unit}>
            <span className={styles.results__number}>
              {state.calculatedResults.area ? state.calculatedResults.area : 0}{" "}
              м2
            </span>
            <p className={styles.results__text}>Кол-во m2 обоев</p>
          </div>
          <div className={styles.results__unit}>
            <span className={styles.results__number}>
              {state.calculatedResults.totalArea
                ? state.calculatedResults.totalArea
                : 0}{" "}
              м2
            </span>
            <p className={styles.results__text}>Площадь оклейки</p>
          </div>
        </div>
      </div>
      <div className={styles.results__buttons}>
        <button
          onClick={() => handleReset()}
          className={[styles.calculator__start__button, styles.reset].join(" ")}
        >
          Сбросить параметры
        </button>
        <button
          className={[styles.calculator__start__button, styles.catalog].join(
            " "
          )}
        >
          Перейти в каталог
        </button>
      </div>
    </div>
  );
}
