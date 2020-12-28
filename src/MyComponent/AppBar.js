import React from "react";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import PopoverNavigation from "./PopoverNavigation.js";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: 64,
    },
    leftAlign: {
      flexGrow: 1,
    },
    divChooseWallet: {
      textAlign: "center",
      color: "rgba(0,0,0,0.6)",
      padding: "8px 0px",
      fontSize: "14px",
    },
    divCountTotal: {
      color: "rgba(0,0,0,0.6)",
      padding: "8px 0px",
      fontSize: "14px",
    },
    title: {
      flexGrow: 1,
    },
  };
});
export default function PrimarySearchAppBar() {
  let classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOut = () => {
    window.location.replace("/signin");
  };
  return (
    <AppBar
      id="header"
      position="static"
      color="inherit"
      className={classes.root}
    >
      <Toolbar>
        <PopoverNavigation></PopoverNavigation>
        <Typography variant="h6" className={classes.title}></Typography>
        {true && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={signOut}>Đăng xuất</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
