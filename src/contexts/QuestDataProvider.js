import { createContext, useContext, useReducer } from "react";
import { resultReducer, initialResult } from "../reducers";

const QuestDataContext = createContext(null);

function QuestDataProvider({ children }) {
  const [state, dispatch] = useReducer(resultReducer, initialResult);

  return (
    <QuestDataContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestDataContext.Provider>
  );
}

const useQuestData = () => useContext(QuestDataContext);

export { useQuestData, QuestDataProvider };
