import styles from "../styles/DoorParameters.module.scss";
import AddButton from "../icons/add-button.png";
import DeleteButton from "../icons/close.png";

export function DoorParameters({ state, dispatch }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_DOOR",
      payload: { index, field: name, value },
    });
  };

  const handleAddDoor = () => {
    dispatch({
      type: "ADD_DOOR",
      payload: { length: "", width: "" },
    });
  };

  const handleRemoveDoor = (index) => {
    dispatch({
      type: "REMOVE_DOOR",
      payload: index,
    });
  };

  return (
    <div className={styles.parameters__doors}>
      <h2 className={styles.parameters__text}>Параметры дверей</h2>
      <div className={styles.block}>
        {state.doors.map((door, index) => {
          return (
            <div key={index} className={styles.door_dimension}>
              <div className={styles.block__header}>
                <h4 className={styles.block__title}>Дверь</h4>
                <img
                  onClick={() => handleRemoveDoor(index)}
                  src={DeleteButton}
                  alt="delete"
                />
              </div>
              <div className={styles.door_dimension__sizes}>
                <div className={styles.sizes__length}>
                  <p className={styles.sizes__text}>Длина м</p>
                  <input
                    className={styles.sizes__input}
                    type="number"
                    placeholder="0"
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e" || e.key === "E") {
                        e.preventDefault();
                      }
                    }}
                    value={door.length ? door.length : ""}
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
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e" || e.key === "E") {
                        e.preventDefault();
                        console.log("onkeydown");
                      }
                    }}
                    value={door.width ? door.width : ""}
                    onChange={(e) => handleChange(e, index)}
                    name="width"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div
          onClick={handleAddDoor}
          className={[styles.door_dimension, styles.add_dimension].join(" ")}
        >
          <img className={styles.add_door__icon} src={AddButton} alt="add" />
          <p className={styles.add_door__text}>Добавить дверь</p>
        </div>
      </div>
    </div>
  );
}
