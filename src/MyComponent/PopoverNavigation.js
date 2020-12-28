import React from "react";
import { IconButton, Fade, makeStyles, Paper } from "@material-ui/core";
import NavigationBar from "./NavigationBar.js";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100,
  },
  paper: {
    zIndex: 1,
    position: "relative",
  },
}));
function PopoverNavigation() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const handleChange = () => {
    console.log(show);
    setShow(!show);
  };
  return (
    <React.Fragment>
      <IconButton onClick={handleChange}>
        <MenuIcon button size="small"></MenuIcon>
      </IconButton>
      <Fade direction="up" in={show} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <NavigationBar handleChange={handleChange}></NavigationBar>
        </Paper>
      </Fade>
    </React.Fragment>
  );
}
export default PopoverNavigation;
