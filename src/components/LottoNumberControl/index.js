import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

import styled from "styled-components";
import "./style.css";

const ControllBtn = styled(Button)`
  && {
    min-width: 100%;
    font-size: 1rem;
  }
`;

export const LottoNumberControl = ({ selectedNumbers, onSelect }) => {
  const LOTTO_MAX_COUNT = 6;

  const handleSubmit = () => {
    if (selectedNumbers.length === LOTTO_MAX_COUNT) {
      onSelect(false, selectedNumbers);
      return;
    }
  };

  return (
    <div className="Controller">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ControllBtn sx={{ mr: 2 }} variant="contained">
            초기화
          </ControllBtn>
        </Grid>
        <Grid item xs={6}>
          <ControllBtn xs={6} variant="contained">
            자동선택
          </ControllBtn>
        </Grid>
        <Grid item xs={12}>
          <ControllBtn variant="contained" onClick={handleSubmit}>
            확인
          </ControllBtn>
        </Grid>
      </Grid>
    </div>
  );
};
