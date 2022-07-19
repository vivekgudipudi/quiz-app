import { useQuestData } from "../contexts";

function ResultCard({ question_set, currentIndex }) {
  const { state } = useQuestData();
  const { question, answer, options } = question_set;

  return (
    <div className="quest-container result-gap">
      <p>{question}</p>
      <div className="quest-opts">
        {options.map((option, index) => {
          return option === answer ? (
            <button
              className="btn btn-primary btn-lg result-correct"
              key={index}
            >
              {option}
            </button>
          ) : (
            <button
              className="btn btn-primary btn-lg result-incorrect"
              key={index}
            >
              {option}
            </button>
          );
        })}

        {state.answers[currentIndex] && (
          <p
            className={
              state.answers[currentIndex] === answer
                ? `answer-correct`
                : `answer-incorrect`
            }
          >
            Your answer: {state.answers[currentIndex]}
          </p>
        )}
      </div>
    </div>
  );
}

export { ResultCard };
