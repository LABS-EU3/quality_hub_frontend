import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RateReviewIcon from '@material-ui/icons/RateReview';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import WorkIcon from '@material-ui/icons/Work';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import card from '../img/card.jpg';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
  root: {
    color: 'white',
    border: 0,
    backgroundColor: green[800],
    boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    borderRadius: 4,
    height: 50,
    width: 200,
    fontSize: 16,
    alignItems: 'center',
    justify: 'center',
    textDecoration: 0,
    '&:hover': {
      backgroundColor: green[900],
    },
  },

  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    padding: 0,
    minWidth: 250,
    maxWidth: 300,
    maxHeight: 330,
    border: '1px solid rgba(0, 0, 0, .25)',
    boxShadow: '0 2px 3px rgba(0,0,0,0.2)',
  },
  media: {
    paddingTop: 5, // 16:9
  },
  top: {
    // backgroundColor: 'red',
    backgroundImage: `url(${card})`,
  },
}));

export default function RecipeReviewCard(props) {
  console.log(props);
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.top}
        style={{
          height: 60,
          // backgroundImage: url('../img/card.jpg'),
        }}
      />
      <CardHeader
        style={{ margin: 10, padding: 0, marginTop: 5 }}
        avatar={
          <Avatar
            style={{
              height: 80,
              width: 80,
              margin: '5px 0px',
              padding: 0,
              border: '2px solid white',
              position: 'relative',
              top: '-50px',
            }}
            alt={props.coach.first_name}
            className={classes.avatar}
            src={props.coach.avatar_url}
          />
        }
      />
      <CardHeader
        style={{
          height: 20,
          width: 30,
          margin: 0,
          marginLeft: 10,
          padding: 0,
          paddingTop: 10,
          position: 'relative',
          top: '-55px',
        }}
        title={props.coach.first_name}
        subheader={props.coach.location}
      ></CardHeader>
      <CardContent
        style={{
          marginTop: 5,
          margin: 5,
          padding: 5,
          marginBottom: 5,
          paddingTop: 10,
          paddingBottom: 5,
        }}
      >
        <Typography
          style={{
            minHeight: 10,
            position: 'relative',
            top: '-40px',
          }}
          variant='body1'
          color='textPrimary'
          component='p'
        >
          {props.coach.description}
        </Typography>
      </CardContent>

      <CardContent
        style={{
          margin: 0,
          padding: 0,
          marginTop: 5,
          fontSize: 10,
          position: 'relative',
          top: '-40px',
        }}
      >
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ marginLeft: 10, padding: 0, paddingRight: 5 }}
          >
            <RateReviewIcon style={{ fontSize: 'medium' }} />
          </IconButton>
          Rating: {props.coach.rating}
        </Typography>
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ marginLeft: 10, padding: 0, paddingRight: 5 }}
          >
            <WorkOutlineIcon style={{ fontSize: 'medium' }} />
          </IconButton>
          Skill Level: {props.coach.skill_level}
        </Typography>
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ marginLeft: 10, padding: 0, paddingRight: 5 }}
          >
            <WorkIcon style={{ fontSize: 'medium' }} />
          </IconButton>
          Experience: {props.coach.experience_level}
        </Typography>
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ marginLeft: 10, padding: 0, paddingRight: 5 }}
          >
            <MonetizationOnIcon style={{ fontSize: 'medium' }} />
          </IconButton>
          Rate: £ {props.coach.hourly_rate} per hr
        </Typography>
        <CardContent
          alignItems='center'
          style={{
            borderTop: '1px solid rgba(0,0,0,0.15)',
            width: 250,
            marginLeft: 0,
            marginTop: 10,
            padding: 0,
            paddingTop: 10,
            height: '50px',
            lineHeight: '50px',
            textAlign: 'center',
          }}
        >
          {/* <StyledButton
            alignItems='center'
            style={{
              position: 'relative',
              left: '10%',
              margin: 0,
              padding: 5,
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
              to={props.coach.contact_url}
            >
              Book Now
            </Link>
          </StyledButton> */}
          <Typography variant='body1'>
            <Link
              style={{
                fontSize: '17px',
                fontWeight: 600,
                textDecoration: 'none',
                color: 'green',
              }}
              to={props.coach.contact_url}
            >
              Book Now
            </Link>
          </Typography>
        </CardContent>
      </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
