import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const LottoNumberControl = ({ reset }) => {
  return (
    <Grid xs={6}>
      <Button sx={{ mr: 2 }} variant="contained" onClick={() => reset()}>
        초기화
      </Button>
      <Button xs={6} variant="contained">
        자동선택
      </Button>
    </Grid>
  );
};
