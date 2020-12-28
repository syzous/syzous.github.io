import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Billiard from "./Billiard.js";

import { Grid, Divider, List, ListItem, ListItemText } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "30px",
  },
  tab: {
    backgroundColor: "white",
  },
  tabview: {
    backgroundColor: "white",
  },
}));

export function TableTypeTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} md={12} xl={12}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            className={classes.tab}
          >
            <Tab label="Bàn Bida Lỗ" {...a11yProps(0)} />
            <Tab label="Bàn Bida Băng" {...a11yProps(1)} />
            <Tab label="Bàn vip" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <Divider />
        <div
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.tabview}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Billiard></Billiard>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Billiard></Billiard>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Billiard></Billiard>
          </TabPanel>
        </div>
      </Grid>
    </Grid>
  );
}
export function FoodTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} md={12} xl={12}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            className={classes.tab}
          >
            <Tab label="Đồ ăn" {...a11yProps(0)} />
            <Tab label="Thức uống" {...a11yProps(1)} />
            <Tab label="Khác" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <Divider />
        <div
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.tabview}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <List>
              <ListItem button>
                <ListItemText primary="Cơm gà" />
                Giá: 50000
              </ListItem>
              <ListItem button>
                <ListItemText primary="Bún thịt nướng" />
                Giá: 50000
              </ListItem>
              <ListItem>Thêm món mới</ListItem>
            </List>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <List>
              <ListItem button>
                <ListItemText primary="Coca" secondary="Số lượng: 10" />
                Giá: 10000
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sting" secondary="Số lượng: 10" />
                Giá: 10000
              </ListItem>
              <ListItem button>
                <ListItemText primary="Nước suối" secondary="Số lượng: 10" />
                Giá: 5000
              </ListItem>
              <ListItem>Thêm món mới</ListItem>
            </List>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <List>
              <ListItem button>
                <ListItemText primary="Thuốc lá Jet" secondary="Số lượng: 30" />
                Giá: 30000
              </ListItem>
            </List>
          </TabPanel>
        </div>
      </Grid>
    </Grid>
  );
}
