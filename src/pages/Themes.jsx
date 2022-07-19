import { useState } from "react";
import { quizData, categories } from "../models";
import { QuizCard } from "../components/QuizCard";
import { filterByCategory } from "../helper-functions";
import { Toaster } from "react-hot-toast";

function Themes() {
  const [category, setCategory] = useState();
  const data = filterByCategory(quizData, category);

  return (
    <div className="center-container">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="categories">
        {categories.map((category) => (
          <p
            className="category-badge"
            key={category.id}
            onClick={() => setCategory(category.category)}
          >
            {category.category}
          </p>
        ))}
      </div>
      <div className="theme-container">
        {data.map((quiz) => (
          <QuizCard key={quiz.id} data={quiz} />
        ))}
      </div>
    </div>
  );
}

export { Themes };
