import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',

    '& .MuiTextField-root': {
      width: 600,
      background: 'white',
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiTextField-root': {
        width: 450,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiTextField-root': {
        width: 300,
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiTextField-root': {
        width: 250,
      },
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
    props.saveFeedback(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          value={value}
          onChange={handleChange}
          id='outlined-multiline-static'
          label='Enter Your Review'
          multiline
          rows='10'
          variant='outlined'
        />
      </div>
    </form>
  );
}
