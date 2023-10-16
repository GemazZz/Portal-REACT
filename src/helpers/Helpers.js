export const addLocalStorage = (key, item) => {
  const specialArr = JSON.parse(localStorage.getItem(key));
  specialArr.push(item);
  localStorage.setItem(key, JSON.stringify(specialArr));
};

export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const questionSingleStructure = (question) => {
  let questionAnswers = [];
  if (question.correctAnswer !== undefined && question.correctAnswer !== "") {
    questionAnswers.push(question.correctAnswer);
  }
  if (question.secondAnswer !== undefined && question.secondAnswer !== "") {
    questionAnswers.push(question.secondAnswer);
  }
  if (question.thirdAnswer !== undefined && question.thirdAnswer !== "") {
    questionAnswers.push(question.thirdAnswer);
  }
  if (question.fourthAnswer !== undefined && question.fourthAnswer !== "") {
    questionAnswers.push(question.fourthAnswer);
  }
  return questionAnswers;
};

export const questionMultiStructure = (question) => {
  let questionAnswers = [];
  if (question.firstAnswer !== undefined && question.firstAnswer !== "") {
    questionAnswers.push(question.firstAnswer);
  }
  if (question.secondAnswer !== undefined && question.secondAnswer !== "") {
    questionAnswers.push(question.secondAnswer);
  }
  if (question.thirdAnswer !== undefined && question.thirdAnswer !== "") {
    questionAnswers.push(question.thirdAnswer);
  }
  if (question.fourthAnswer !== undefined && question.fourthAnswer !== "") {
    questionAnswers.push(question.fourthAnswer);
  }
  return questionAnswers;
};

export const validateInput = () => {
  if (!foundUser) {
    alert("შეიყვანეთ საიდენტიფიკაციო კოდი სწორად");
    return;
  }
  if (!currentSpecial || currentSpecial === "#") {
    alert("აირჩიეთ სპეციალობა");
    return;
  }
  navigate("/" + newNumUser + "/" + userId + "/" + currentSpecial);
};
