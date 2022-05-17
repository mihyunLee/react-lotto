import { useState } from "react";
import Button from "@mui/material/Button";

export const LottoNumberItem = ({
  deleteNumbers,
  saveNumbers,
  selectedNumbers,
  lottoNumber,
}) => {
  const LOTTO_MAX_COUNT = 6;

  const [color, setColor] = useState("success");
  const [isClicked, setIsClicked] = useState(true);

  const clickNumber = (e) => {
    if (selectedNumbers.length >= LOTTO_MAX_COUNT && isClicked) {
      alert("최대 6개까지 선택가능합니다.");
      setColor("success");
      deleteNumbers(Number(e.target.innerText));
      return;
    }

    setIsClicked(!isClicked);

    if (isClicked) {
      saveNumbers(Number(e.target.innerText));
      setColor("error");
    } else {
      deleteNumbers(Number(e.target.innerText));
      setColor("success");
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
