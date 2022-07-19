import { db } from "../backend";
import { useAuth } from "../contexts";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

function LatestResult() {
  const { currentUser } = useAuth();
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      const quizData = docSnap.data();
      setScoreData(quizData.score);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="center-container">
      <h2>Your Latest Scores</h2>
      {scoreData.length ? (
        <div>
          <table>
            <tr>
              <th>Sr.no</th>
              <th>Quiz title</th>
              <th>Score</th>
            </tr>
            {scoreData.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.quest_name}</td>
                  <td>{data.score}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <div>
          <img
            className="empty-data"
            src="https://i.ibb.co/2ZwzRqK/undraw-happy-music-g6wc.png"
            alt="empty-data"
            border="0"
          ></img>
        </div>
      )}
    </div>
  );
}

export { LatestResult };
