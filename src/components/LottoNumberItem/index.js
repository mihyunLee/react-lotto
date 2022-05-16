import { useState } from "react";
import Button from "@mui/material/Button";

export const LottoNumberItem = ({ LottoNumber, lottoData }) => {
  const [color, setColor] = useState("success");

  function changeButtonColor(LottoNumber) {
    const colorValue = color === "error" ? "success" : "error";
    if (lottoData({ LottoNumber: LottoNumber, color: colorValue })) {
      setColor(colorValue);
    }
  }
  return (
    <>
      <Button
        sx={{ m: 0.5, p: 0.1, maxWidth: "100%" }}
        onClick={() => changeButtonColor(LottoNumber)}
        variant="contained"
        color={color}
      >
        {LottoNumber}
      </Button>
    </>
  );
};
