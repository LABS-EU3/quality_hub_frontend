import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FeedbackModal from '../Modals/FeedbackModal';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function FeedbackCard(props) {
  const classes = useStyles();
  const {
    rating,
    feedback,
    date,
    coachFirstName,
    coachLastName,
    topic,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {rating}
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {topic}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {feedback}
          </Typography>
          <FeedbackModal
            coachFirstName={coachFirstName}
            coachLastName={coachLastName}
            feedback={feedback}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>{coachFirstName[0] + coachLastName[0]}</div>
        <div>{date}</div>
      </CardActions>
    </Card>
  );
}
