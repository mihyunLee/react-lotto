import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const LottoNumberControl = ({ selectedNumbers, onSelect }) => {
  const handleSubmit = () => {
    alert("저장 성공");
    onSelect(false, selectedNumbers);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button sx={{ mr: 2 }} variant="contained">
            초기화
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button xs={6} variant="contained">
            자동선택
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            확인
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
