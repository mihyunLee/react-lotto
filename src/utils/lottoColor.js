export const changeColor = (num) => {
  let color = "";
  switch (parseInt(num / 10)) {
    case 0:
      color = "quotient-zero";
      break;
    case 1:
      color = "quotient-one";
      break;
    case 2:
      color = "quotient-two";
      break;
    case 3:
      color = "quotient-three";
      break;
    case 4:
      color = "quotient-four";
      break;
    default:
      color = "#e2e2e2";
  }
  return color;
};
