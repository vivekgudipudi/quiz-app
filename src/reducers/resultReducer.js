const resultReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESULT":
      return {
        ...state,
        answers:
          action.payload.length === 0
            ? action.payload
            : [...state.answers, action.payload],
      };
    case "SET_OPTION":
      return { ...state, option: action.payload };
    case "SET_QUEST":
      return { ...state, question_set: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_QUEST_TITLE":
      return { ...state, quest_title: action.payload };
    default:
      return state;
  }
};

const initialResult = {
  quest_title: "",
  question_set: {},
  answers: [],
  score: 0,
  option: "",
};

export { resultReducer, initialResult };
