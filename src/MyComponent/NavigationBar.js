import React from "react";
import { makeStyles, Box, Divider } from "@material-ui/core";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import HelpIcon from "@material-ui/icons/Help";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  nav: {
    width: "80px",
    height: "100vh",
    backgroundColor: "white",
    position: "fixed",
    textAlign: "center",
    boxShadow: "0 3px 7px 0 rgba(0,0,0,.27)",
    zIndex: 200,
    top: "0 !important",
    left: "0 !important",
  },
  list: {
    paddingTop: "0px",
  },
  itemMenu: {
    height: "64px",
  },
  itemNav: {
    width: "100%",
    textAlign: "center",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.4)",
  },
}));

function NavigationBar({ handleChange }) {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <List className={classes.list}>
        <ListItem button onClick={handleChange} className={classes.itemMenu}>
          <div className={classes.itemNav}>
            <CancelPresentationIcon></CancelPresentationIcon>
          </div>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            window.location.replace("/");
          }}
        >
          <div className={classes.itemNav}>
            <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
            <Box>Tính tiền</Box>
          </div>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            window.location.replace("/report");
          }}
        >
          <div className={classes.itemNav}>
            <CollectionsBookmarkIcon></CollectionsBookmarkIcon>
            <Box>Báo cáo</Box>
          </div>
        </ListItem>
        <ListItem button>
          <div className={classes.itemNav}>
            <HelpIcon></HelpIcon>
            <Box>Trợ giúp</Box>
          </div>
        </ListItem>
      </List>
    </div>
  );
}

export default NavigationBar;
