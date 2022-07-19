import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, useQuestData } from "../contexts";
import { Toaster } from "react-hot-toast";

function Home() {
  const { currentUser } = useAuth();
  const { dispatch } = useQuestData();

  useEffect(() => {
    dispatch({ type: "SET_OPTION", payload: "" });
    dispatch({ type: "SET_QUEST", payload: {} });
    dispatch({ type: "SET_RESULT", payload: [] });
    dispatch({ type: "SET_QUEST_TITLE", payload: "" });
    dispatch({ type: "SET_SCORE", payload: 0 });
  }, []);

  return (
    <div className="container">
      <Toaster position="bottom-right" reverseOrder={false} />
        <p className="main-desc">
          We've got all the quizzes you love to binge! Come on in
        </p>
        <div>
          <button className="btn btn-primary">
            <Link to={currentUser ? "/themes" : "/login"}>Explore Quizzes</Link>
          </button>
          <button className="btn btn-secondary">
            <a href="https://github.com/vivekgudipudi/quiz-app">GitHub</a>
          </button>
        </div>
    </div>
  );
}

export { Home };
