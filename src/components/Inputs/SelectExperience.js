import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SelectExperience = props => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>Experience</InputLabel>
        <Select
          defaultValue=''
          input={
            <Input
              onChange={e =>
                props.searchForExperience(e.target.value)
              }
              name='experience'
              id='experience-select'
            />
          }
        >
          <MenuItem value={1}>Beginner</MenuItem>
          <MenuItem value={2}>Advanced</MenuItem>
          <MenuItem value={3}>Expert</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectExperience;
