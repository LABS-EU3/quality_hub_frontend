import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  listItem: {
    textDecoration: 'none',
    color: 'black',
  },
  green: {
    background: '#4fad65',
  },
}));

const customListItemStyles = {
  root: {
    borderRadius: '15px',
    border: '8px solid white',
    paddingTop: '5px',
    paddingBottom: '5px',
    marginBottom: '-0.2em',
    marginTop: '-0.2em',
    height: '90%',
    transition: '0.1s',
    '&:hover': {
      background: '#4fad65',
      color: 'white',
      transform: 'scale(1.03)',
      '& div': {
        '& svg': {
          color: 'white',
        },
      },
    },
    '&:focus': {
      background: '#4fad65',
      color: 'white',
      '& div': {
        '& svg': {
          color: 'white',
        },
      },
    },
  },
};

const CustomListItem = withStyles(customListItemStyles)(ListItem);

export const ListComponent = () => {
  const classes = useStyles();
  return (
    <List>
      <div>
        <Link to='/dashboard' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <DashboardIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </CustomListItem>
        </Link>
        <Link to='/marketplace' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Coaches' />
          </CustomListItem>
        </Link>
        <Link to='/feedback' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Feedback' />
          </CustomListItem>
        </Link>
        <Link to='/givefeedback' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary='FAQ' />
          </CustomListItem>
        </Link>
      </div>
    </List>
  );
};
