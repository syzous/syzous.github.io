import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FoodTab } from "../MyComponent/TabView.js";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import BillPrint from "./BillPrint.js";
import { useReactToPrint } from "react-to-print";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ table }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
    handlePrint();
  };
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };
  return (
    <div>
      <img
        style={{ width: "100%" }}
        onClick={handleClickOpen}
        src="/billiards.png"
      ></img>
      <span>Bàn {table}</span>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <ArrowBackIcon
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </ArrowBackIcon>
            <span>Bàn {table}</span>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={6}>
                Giá mỗi giờ:
              </Grid>
              <Grid item xs={6}>
                10.000/h{" "}
              </Grid>
              <Grid item xs={6}>
                Thời gian chơi tổng cộng
              </Grid>
              <Grid item xs={6}>
                1h39p
              </Grid>
              <Grid item xs={12}>
                <FoodTab></FoodTab>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ borderLeft: "2px solid", height: "100%" }}>
            <List>
              <ListItem button>
                <ListItemText primary="Cơm gà x 2" />
                100000
              </ListItem>
              <ListItem button>
                <ListItemText primary="Bún thịt nướng x 3" />
                150000
              </ListItem>
              <Divider></Divider>
              <ListItem>
                <ListItemText primary="" />
                250000
              </ListItem>
            </List>
            <Grid container>
              <Grid item xs={6}>
                <Button
                  style={{ width: "100%" }}
                  variant="contained"
                  color="primary"
                >
                  Lưu
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  style={{ width: "100%" }}
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpenConfirm}
                >
                  In hoá đơn
                </Button>
                <Dialog
                  open={openConfirm}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleCloseConfirm}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle id="alert-dialog-slide-title">
                    Thanh toán
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Xác nhận khách hàng đã thanh toán 250.000
                      <button onClick={handlePrint}>In hoá đơn</button>
                      <BillPrint ref={componentRef} />
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseConfirm} color="primary">
                      Không
                    </Button>
                    <Button onClick={handleCloseConfirm} color="primary">
                      Xác nhận thanh toán
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
