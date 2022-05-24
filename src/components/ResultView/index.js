/* eslint-disable */

import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResultView = () => {
    let result = "123";

    return (
        <div callssName="ResultController">
            <Grid container spacing={0}>
                <Grid item xs="auto">
                <Button size="large" variant="contained" href="/" >다시하기</Button>
                </Grid>
            </Grid>
            
            
        </div>
    )
}