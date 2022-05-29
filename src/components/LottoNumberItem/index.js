import { useState } from "react";

import Button from "@mui/material/Button";
import styled from "styled-components";
import "./style.css";

const NumButton = styled(Button)`
  && {
    font-size: 1.1rem;
  }
`;

export const LottoNumberItem = ({
  removeNumbers,
  saveNumbers,
  selectedNumbers,
  lottoNumber, initColor
}) => {
  const LOTTO_MAX_COUNT = 6;

  const [color, setColor] = useState(initColor);
  const [isClicked, setIsClicked] = useState(true);

  const clickNumber = (e) => {
    if (selectedNumbers.length >= LOTTO_MAX_COUNT && isClicked) {
      alert("최대 6개까지 선택가능합니다.");
      setColor("success");
      removeNumbers(Number(e.target.innerText));
      return;
    }

    setIsClicked(!isClicked);

    if (isClicked) {
      saveNumbers(Number(e.target.innerText));
      setColor("error");
    } else {
      removeNumbers(Number(e.target.innerText));
      setColor("success");
    }
  };

  return (
    <div className="NumberItem">
      <NumButton
        size="large"
        sx={{ m: 1 }}
        onClick={clickNumber}
        variant="contained"
        color={color}
      >
        {lottoNumber}
      </NumButton>
    </div>
  );
};
