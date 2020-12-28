import React, { useState } from "react";
import {
  Grid,
  TextField,
  Checkbox,
  Typography,
  Button,
  makeStyles,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(8),
  },
  center: {
    textAlign: "center",
  },
  img: {
    width: "60px",
    height: "60px",
  },
  link: {
    fontSize: "12px",
    textAlign: "center",
  },
}));
function SignInComponent() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function onSignIn() {
    console.log(userName, password);
  }
  return (
    <Container maxWidth="xs">
      <Grid className={classes.root} container spacing={1}>
        <Grid item xs={12} className={classes.center}>
          <img className={classes.img} alt="logo" src="/logo192.png"></img>
        </Grid>
        <Grid item xs={12} className={classes.center}>
          <Typography>Sign in</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="User Name"
            variant="outlined"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type="Password"
            variant="outlined"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={onSignIn}
          >
            SIGN IN
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.center}>
          <Link to="/signup" className={classes.link}>
            Don't have an account? Sign Up
          </Link>
        </Grid>
        <Grid item xs={12} className={classes.center}>
          Copyright © Your Website 2020.
        </Grid>
      </Grid>
    </Container>
  );
}
export default SignInComponent;
