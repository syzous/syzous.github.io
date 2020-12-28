import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { postRequest, tail } from "../Util/CallApi.js";
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
  },
}));
function SignUpComponent() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function onSignUp() {
    let json = {
      userName,
      password,
      firstName,
      lastName,
      email,
      phone,
    };
    try {
      let val = postRequest(tail.signUp, json);
      console.log(val);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Container maxWidth="xs">
      <Grid className={classes.root} container spacing={1}>
        <Grid item xs={12} className={classes.center}>
          <img className={classes.img} alt="logo" src="/logo192.png"></img>
        </Grid>
        <Grid item xs={12} className={classes.center}>
          <Typography>Sign Up</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="User Name"
            variant="outlined"
            required
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            // required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            // required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={onSignUp}
          >
            SIGN Up
          </Button>
          <Grid item xs={12} className={classes.center}>
            <Link to="/signin" className={classes.link}>
              Already have account? Sign In
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.center}>
          Copyright © Your Website 2020.
        </Grid>
      </Grid>
    </Container>
  );
}
export default SignUpComponent;
