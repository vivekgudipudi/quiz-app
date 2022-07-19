const filterByCategory = (quizData, category) => {
  switch (category) {
    case "Easy":
      return [...quizData].filter((data) => data.category === "Easy");
    case "Medium":
      return [...quizData].filter((data) => data.category === "Medium");
    case "Difficult":
      return [...quizData].filter((data) => data.category === "Difficult");
    default:
      return quizData;
  }
};

export { filterByCategory };
