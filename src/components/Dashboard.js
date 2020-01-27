import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MatLink from '@material-ui/core/Link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ListComponent } from '../utils/dashboardList';
import logo from '../img/firelogo.png';
import { logout } from '../state/actions/authenticationActions';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <MatLink color='inherit' href='https://dev-coach.com/'>
        Dev-Coach
      </MatLink>{' '}
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
    background: '#f9f9f9',
    zIndex: -10,
  },

  toolbarIcon: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
    color: '#4fad65',
    fontSize: '.8rem',
    paddingLeft: '3em',
  },
  toolbarIconClosed: {
    backgroundImage: `url(${logo})`,
    marginLeft: '-0.4em',
    width: '100%',
    transform: 'scale(0.6)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
    color: '#4fad65',
    fontSize: '.8rem',
    transition: '',
    '&:hover': {
      transform: 'scale(0.65)',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none',
    color: 'grey',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  profileMenu: {
    position: 'absolute',
    top: 20,
    right: 40,
    color: 'grey',
    transform: 'scale(1.5)',
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
  drawer: {},
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
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
    zIndex: 10000,
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
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    textAlign: 'center',
    margin: '2rem 0 1rem 0',
    padding: '0',
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 5s, opacity 0s linear',
  },
}));

const Dashboard = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleLogout = () => {
    setAnchorEl(null);
    props.logout(props);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}
      ></AppBar>
      <div className={classes.profileMenu}>
        <IconButton
          className={classes.iconButton}
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
          <Link className={classes.link} to='/settings'>
            <MenuItem>Settings</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(
            classes.drawer,
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
          ),
        }}
        open={open}
      >
        <div
          className={
            open ? classes.toolbarIcon : classes.toolbarIconClosed
          }
          onClick={() => setOpen(!open)}
        >
          <h1
            className={open ? classes.toolbarTitle : classes.hidden}
          >
            DevCoach
          </h1>
          {
            <IconButton
              className={!open ? classes.hidden : null}
              onClick={handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          }
        </div>
        <Divider className={classes.styledDivider} />
        <ListComponent
          role_id={props.user.role_id}
          className={classes.listStyles}
        />
        <Divider className={classes.hidden} />
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
          </Grid>
          <Box pt={4} className={classes.copyright}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default withRouter(
  connect(state => state.userReducer, { logout })(Dashboard),
);
