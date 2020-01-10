import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { mainListItems } from '../utils/dashboardList';
import logo from '../img/firelogo.png';
import styled from 'styled-components';
import DashboardNav from './DashboardNav';

// function Dashboard(props) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position='absolute'
//         className={clsx(classes.appBar, open && classes.appBarShift)}
//       >
//         <DashboardNav />
//       </AppBar>
//       <Drawer
//         variant='permanent'
//         classes={{
//           paper: clsx(
//             classes.drawerPaper,
//             !open && classes.drawerPaperClose,
//           ),
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <h1>DevCoach</h1>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>{mainListItems}</List>
//         <Divider />
//       </Drawer>
//       <main className={classes.content}>
//         {props.routes}
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth='lg' className={classes.container}>
//           <Grid container spacing={3}></Grid>
//           <Box pt={4}>
//             <Copyright />
//           </Box>
//         </Container>
//       </main>
//     </div>
//   );
// }

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <Settings/> */}
      <CssBaseline />
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          {/* <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
          ),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <h1>DevCoach</h1>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid
            container
            spacing={3}
            className={classes.gridContainer}
          >
            {props.routes}
            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}> */}
            {/* <Paper className={fixedHeightPaper}> */}
            {/* <Chart /> */}
            {/* </Paper> */}
            {/* </Grid> */}
            {/* Recent Deposits
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            Recent Orders
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>  */}
          </Grid>
          <Box pt={4} className={classes.copyright}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://dev-coach.com/'>
        Dev-Coach
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    // background: '#4FAD65',
  },

  toolbarIcon: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '10px',
    backgroundSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 4px',
    ...theme.mixins.toolbar,
    color: '#4fad65',
    fontSize: '.7rem',
    fontFamily: 'ABeeZee',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: '#4fad65',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridContainer: {
    // height: '100vh',
  },
  // paper: {
  //   // padding: theme.spacing(2),
  //   display: 'flex',
  //   // overflow: 'auto',
  //   // flexDirection: 'column',
  //   width: '100%',
  // },
  // fixedHeight: {
  //   height: '80vh',
  // },
  copyright: {
    textAlign: 'center',
  },
}));
// const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
