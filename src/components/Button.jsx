import { calculateResults } from "../calculateResults";
import styles from "../styles/Button.module.scss";

export function Button({ state, dispatch }) {
  const handleCalculate = () => {
    const hasErrors = Object.values(state.errors).some((error) => error !== "");

    if (hasErrors) {
      alert("Исправьте ошибки перед отправкой");
      return;
    }

    const newErrors = {};
    Object.keys(state.room).forEach((key) => {
      if (state.room[key] === "") {
        newErrors[key] = "Поле обязательно";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      dispatch({
        type: "UPDATE_ERRORS",
        payload: newErrors,
      });

      const roomParametersElement = document.getElementById("roomParameters");
      if (roomParametersElement) {
        roomParametersElement.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const results = calculateResults(
      state.room,
      state.roll,
      state.windows,
      state.doors,
      state.raport
    );

    if (results) {
      dispatch({
        type: "SET_RESULTS",
        payload: results,
      });

      setTimeout(() => {
        const resultsElement = document.getElementById("results");
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      console.error("Ошибка: Некорректные данные для расчета");
    }
  };

  return (
    <button
      onClick={handleCalculate}
      className={[styles.calculator__start__button, styles.calculate].join(" ")}
    >
      Рассчитать материалы
    </button>
  );
}
