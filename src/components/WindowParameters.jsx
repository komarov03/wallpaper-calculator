import styles from "../styles/WindowParameters.module.scss";
import AddButton from "../icons/add-button.png";
import DeleteButton from "../icons/close.png";

export function WindowParameters({ state, dispatch }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (!validateInput(value)) {
      return;
    }

    dispatch({
      type: "UPDATE_WINDOW",
      payload: { index, field: name, value },
    });
  };

  const handleAddWindow = () => {
    dispatch({
      type: "ADD_WINDOW",
      payload: { length: "", width: "" },
    });
  };

  const handleRemoveWindow = (index) => {
    dispatch({
      type: "REMOVE_WINDOW",
      payload: index,
    });
  };

  const validateInput = (value) => {
    return /^\d*\.?\d*$/.test(value);
  };

  return (
    <div className={styles.parameters__windows}>
      <h2 className={styles.parameters__text}>Параметры окон</h2>
      <div className={styles.block}>
        {state.windows.map((window, index) => {
          return (
            <div className={styles.window_dimension} key={index}>
              <div className={styles.block__header}>
                <h4 className={styles.block__title}>Окно</h4>
                <img
                  onClick={() => handleRemoveWindow(index)}
                  src={DeleteButton}
                  alt="delete"
                />
              </div>
              <div className={styles.window_dimension__sizes}>
                <div className={styles.sizes__length}>
                  <p className={styles.sizes__text}>Длина м</p>
                  <input
                    className={styles.sizes__input}
                    type="number"
                    placeholder="0"
                    min={0}
                    onKeyDown={(e) => {
                      if (!/[0-9.]|Backspace|Delete/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    value={window.length ? window.length : ""}
                    onChange={(e) => handleChange(e, index)}
                    name="length"
                  />
                </div>
                <div className={styles.sizes__length}>
                  <p className={styles.sizes__text}>Ширина м</p>
                  <input
                    className={styles.sizes__input}
                    type="number"
                    placeholder="0"
                    min={0}
                    onKeyDown={(e) => {
                      if (!/[0-9.]|Backspace|Delete/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    value={window.width ? window.width : ""}
                    onChange={(e) => handleChange(e, index)}
                    name="width"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div
          onClick={handleAddWindow}
          className={[styles.window_dimension, styles.add_dimension].join(" ")}
        >
          <img className={styles.add_window__icon} src={AddButton} alt="add" />
          <p className={styles.add_window__text}>Добавить окно</p>
        </div>
      </div>
    </div>
  );
}
