import React from 'react'
import LottoNumberList from "../components/LottoNumberItems/LottoNumberList";
import LottoNumberControl from "../components/LottoNumberControl/LottoNumberControl";
import {Box} from "@mui/material";

export default function LeftPage() {
  function reRender() {

  }
  return (
    <Box sx={{ maxWidth: '45%', border: '1px solid gray', alignItems: "center", justifyContent: "center"}}>
      <LottoNumberList reset = {() => reRender}/>
      <LottoNumberControl reset = {() => console.log('render')}/>
    </Box>
  )
}
