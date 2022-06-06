export const makeRandomNumber = () => {
  const randomNumArr = [];
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 45 + 1);
    if (randomNumArr.indexOf(randomNum) === -1) {
      randomNumArr.push(randomNum);
    } else {
      i--;
    }
  }
  return randomNumArr;
};
