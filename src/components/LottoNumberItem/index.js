import { useState } from "react";
import Button from "@mui/material/Button";

export const LottoNumberItem = ({
  deleteNumbers,
  saveNumbers,
  lottoNumber,
}) => {
  const [color, setColor] = useState("success");
  const [isClicked, setIsClicked] = useState(true);

  const clickNumber = (e) => {
    setIsClicked(!isClicked);
    if (isClicked) {
      setColor("error");
      saveNumbers(Number(e.target.innerText));
    } else {
      setColor("success");
      deleteNumbers(Number(e.target.innerText));
    }
  };

  return (
    <>
      <Button
        sx={{ m: 0.5, p: 0.1, maxWidth: "100%" }}
        onClick={clickNumber}
        variant="contained"
        color={color}
      >
        {lottoNumber}
      </Button>
    </>
  );
};
