import { useReducer } from "react";
import { Button } from "../components/Button";
import { DoorParameters } from "../components/DoorParameters";
import { Results } from "../components/Results";
import { RollRaportParameters } from "../components/RollRaportParamaters";
import { RoomParameters } from "../components/RoomParameters";
import { WindowParameters } from "../components/WindowParameters";
import styles from "../styles/Parameters.module.scss";
import { initialState, parametersReducer } from "../parametersReducer";

export function Parameters() {
  const [state, dispatch] = useReducer(parametersReducer, initialState);

  console.log("calculatedResults:", state.calculatedResults); // Проверка значения

  return (
    <div id="roomParameters" className={styles.parameters}>
      <RoomParameters state={state} dispatch={dispatch} />
      <RollRaportParameters state={state} dispatch={dispatch} />
      <WindowParameters state={state} dispatch={dispatch} />
      <DoorParameters state={state} dispatch={dispatch} />
      <Button state={state} dispatch={dispatch} />
      {state.calculatedResults &&
        Object.keys(state.calculatedResults).length > 0 && (
          <Results state={state} dispatch={dispatch} />
        )}
    </div>
  );
}
