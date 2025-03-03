const initialState = {
  room: {
    length: "",
    width: "",
    height: "",
  },
  roll: "10.6",
  raport: "26.5",
  windows: [{ length: "", width: "" }],
  doors: [{ length: "", width: "" }],
  calculatedResults: {},
  errors: {
    length: "",
    width: "",
    height: "",
  },
};

const validateField = (name, value) => {
  if (!value) {
    return "Это поле обязательно";
  }
  if (isNaN(value)) {
    return "Введите число";
  }
  if (parseFloat(value) <= 0) {
    return "Значение должно быть больше 0";
  }
  return "";
};

function parametersReducer(state, action) {
  switch (action.type) {
    case "UPDATE_ROOM":
      return {
        ...state,
        room: {
          ...state.room,
          [action.payload.field]: action.payload.value,
        },
        errors: {
          ...state.errors,
          [action.payload.field]: validateField(
            action.payload.field,
            action.payload.value
          ),
        },
      };
    case "SELECT_ROLL":
      return {
        ...state,
        roll: action.payload,
      };
    case "SELECT_RAPORT":
      return {
        ...state,
        raport: action.payload,
      };
    case "ADD_WINDOW":
      return {
        ...state,
        windows: [...state.windows, action.payload],
      };
    case "UPDATE_WINDOW":
      return {
        ...state,
        windows: state.windows.map((window, i) =>
          i === action.payload.index
            ? { ...window, [action.payload.field]: action.payload.value }
            : window
        ),
      };
    case "REMOVE_WINDOW":
      return {
        ...state,
        windows: state.windows.filter((_, i) => i !== action.payload),
      };
    case "ADD_DOOR":
      return {
        ...state,
        doors: [...state.doors, action.payload],
      };
    case "UPDATE_DOOR":
      return {
        ...state,
        doors: state.doors.map((door, i) =>
          i === action.payload.index
            ? { ...door, [action.payload.field]: action.payload.value }
            : door
        ),
      };
    case "REMOVE_DOOR":
      return {
        ...state,
        doors: state.doors.filter((_, index) => index !== action.payload),
      };
    case "SET_RESULTS":
      return {
        ...state,
        calculatedResults: action.payload, // Сохраняем результаты
      };
    case "UPDATE_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    case "RESET":
      return {
        room: {
          length: "",
          width: "",
          height: "",
        },
        roll: "10.6",
        raport: "26.5",
        windows: [{ length: "", width: "" }],
        doors: [{ length: "", width: "" }],
        calculatedResults: {},
        errors: {
          length: "",
          width: "",
          height: "",
        },
      };
    default:
      return state;
  }
}

export { initialState, parametersReducer };
