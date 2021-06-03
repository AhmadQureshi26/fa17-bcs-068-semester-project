import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DashboardPage from "./DashboardPage";
import StockPage from "./StockPage";
import RunningjobsPage from "./RunningJobsPage";
import { IndexLinkContainer } from "react-router-bootstrap";
import CustomerqueriesPage from "./CustomerQueriesPage";
import EmployessPage from "./EmployeesPage";
import TodosPage from "./TodosPage";
import PastJobsPage from "./PastJobsPage";
import AddJobsPage from "./AddJobsPage";
import CustomersPage from "./CustomersPage";
import Alert from "./Alert";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      left: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [title, setTitle] = useState("Admin");

  // const [alertOpen, setAlertOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          "Dashboard",
          "Stock",
          "Customer queries",
          "Running jobs",
          "Add jobs",
          "Customers",
        ].map((text, index) => (
          <>
            <IndexLinkContainer
              to={`/admin/${text.replace(/ +/g, "")}Page`}
              title={text}
            >
              <ListItem button key={text} onClick={() => setTitle(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </IndexLinkContainer>
            {/* <Divider /> */}
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {console.log("props of drawer", props)}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Alert />
        {/* {props.formSaved === false ? <Alert /> : <></>} */}
        {props.page === "DashboardPage" ? <DashboardPage /> : <></>}
        {props.page === "StockPage" ? <StockPage /> : <></>}
        {props.page === "RunningjobsPage" ? <RunningjobsPage /> : <></>}
        {props.page === "CustomerqueriesPage" ? <CustomerqueriesPage /> : <></>}
        {props.page === "TodosPage" ? <TodosPage /> : <></>}
        {props.page === "EmployeesPage" ? <EmployessPage /> : <></>}
        {props.page === "PastjobsPage" ? <PastJobsPage /> : <></>}
        {props.page === "AddjobsPage" ? <AddJobsPage /> : <></>}
        {props.page === "CustomersPage" ? <CustomersPage /> : <></>}
      </main>
      {/*
       */}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
