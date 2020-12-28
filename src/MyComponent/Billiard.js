import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FullScreenDialog from "./DialogBilliard.js";
export default function Billiart() {
  const listTable = [];
  for (let i = 1; i <= 10; i++) {
    listTable.push(
      <Grid item xs={2} style={{ padding: "30px" }}>
        <FullScreenDialog table={i}></FullScreenDialog>
      </Grid>
    );
  }
  return (
    <Grid container alignItems="center" style={{ textAlign: "center" }}>
      {listTable}
      <Grid item xs={2}>
        <img style={{ width: "50%" }} src="/plus-sign.png"></img>
      </Grid>
    </Grid>
  );
}
