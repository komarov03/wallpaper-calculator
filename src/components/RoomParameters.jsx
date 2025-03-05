import styles from "../styles/RoomParameters.module.scss";
import DeleteButton from "../icons/close.png";
import { Link } from "react-router";

export function RoomParameters({ state, dispatch }) {
  const validateField = (name, value) => {
    let error = "";

    if (!validateInput(value)) {
      return;
    }

    if (!value) {
      error = "Это поле обязательно";
    } else if (isNaN(value)) {
      error = "Введите число";
    } else if (parseFloat(value) <= 0) {
      error = "Значение должно быть больше 0";
    }

    dispatch({
      type: "UPDATE_ERRORS",
      payload: { ...state.errors, [name]: error },
    });
  };

  const handleRoomChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_ROOM",
      payload: { field: name, value },
    });

    validateField(name, value);
  };

  const validateInput = (value) => {
    return /^\d*\.?\d*$/.test(value);
  };

  return (
    <div className={styles.parameters__room}>
      <div className={styles.header__block}>
        <h2 className={styles.parameters__text}>Параметры комнаты</h2>
        <Link to={"/"}>
          <img src={DeleteButton} alt="delete" />
        </Link>
      </div>
      <div className={styles.sizes}>
        <div className={styles.sizes__length}>
          <p className={styles.sizes__text}>Длина м</p>
          <input
            className={styles.sizes__input}
            type="number"
            placeholder="6.5"
            name="length"
            value={state.room.length}
            onChange={handleRoomChange}
          />
          {state.errors.length && (
            <span className={styles.error}>{state.errors.length}</span>
          )}
        </div>
        <div className={styles.sizes__length}>
          <p className={styles.sizes__text}>Ширина м</p>
          <input
            className={styles.sizes__input}
            type="number"
            placeholder="6.5"
            name="width"
            value={state.room.width}
            onChange={handleRoomChange}
          />
          {state.errors.width && (
            <span className={styles.error}>{state.errors.width}</span>
          )}
        </div>
        <div className={styles.sizes__length}>
          <p className={styles.sizes__text}>Высота м</p>
          <input
            className={styles.sizes__input}
            type="number"
            placeholder="6.5"
            name="height"
            value={state.room.height}
            onChange={handleRoomChange}
          />
          {state.errors.height && (
            <span className={styles.error}>{state.errors.height}</span>
          )}
        </div>
      </div>
    </div>
  );
}
