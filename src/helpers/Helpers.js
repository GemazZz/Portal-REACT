export const startURL = "http://192.168.101.136:4000";

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

export const timeDif = (dateHour1, dateMinute1, dateHour2, dateMinute2) => {
  const time1 = dateHour1 * 60 + dateMinute1;
  const time2 = dateHour2 * 60 + dateMinute2;
  const dif = time2 - time1;
  return dif;
};

export const arrayToObject = (array) => {
  return array.reduce((obj, item) => {
    if (parseInt(item) !== undefined) {
      const key = Object.keys(item)[0];
      obj[key] = item[key];
      return obj;
    }
  }, {});
};

export const compareObjects = (obj1, obj2) => {
  const result = [];

  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  allKeys.forEach((key) => {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        result.push({
          key: key,
          obj1Value: obj1[key],
          obj2Value: obj2[key],
        });
      }
    } else if (obj1.hasOwnProperty(key)) {
      result.push({
        key: key,
        obj1Value: obj1[key],
        obj2Value: null,
      });
    }
  });

  return result;
};
