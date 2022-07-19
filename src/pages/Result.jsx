import { db } from "../backend";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { ResultCard } from "../components";
import { useAuth, useQuestData } from "../contexts";
import { updateDoc, doc, getDoc, arrayUnion } from "firebase/firestore";

function Result() {
  const { state } = useQuestData();
  const { currentUser } = useAuth();

  const { quest_title, score } = state;
  const latestScore = score;

  useEffect(() => {
    (async () => {
      let flag = true;

      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      const quizData = docSnap.data();

      if (quizData.score.length > 0) {
        quizData.score.every((item) => {
          if (item.quest_name === quest_title) {
            flag = false;
            return false;
          }
          return true;
        });
      }

      if (flag === false) {
        await updateDoc(docRef, {
          score:
            quizData.score.length > 0
              ? quizData.score.map((item) => {
                  return quest_title === item.quest_name
                    ? { ...item, score: latestScore }
                    : item;
                })
              : arrayUnion({ quest_name: quest_title, score: latestScore }),
        });
      } else {
        await updateDoc(docRef, {
          score: arrayUnion({ quest_name: quest_title, score: latestScore }),
        });
      }
    })();
    // eslint-disable-next-line
  }, [latestScore]);

  return (
    <div className="center-container">
      <Toaster position="bottom-right" reverseOrder={false} />
      <h2>{quest_title}</h2>
      <h3>Final Score: {latestScore} / 50</h3>
      {state.question_set.map((question, index) => (
        <ResultCard key={index} question_set={question} currentIndex={index} />
      ))}
    </div>
  );
}

export { Result };
