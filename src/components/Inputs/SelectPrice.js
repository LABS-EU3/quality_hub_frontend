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

const SelectPrice = props => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>Price</InputLabel>
        <Select
          defaultValue=''
          input={
            <Input
              onChange={e => props.searchForPrice(e.target.value)}
              name='price'
              id='price-select'
            />
          }
        >
          <MenuItem value={1000}>All</MenuItem>
          <MenuItem value={20}>under 20$</MenuItem>
          <MenuItem value={40}>under 40$</MenuItem>
          <MenuItem value={60}>under 60$</MenuItem>
          <MenuItem value={80}>under 80$</MenuItem>
          <MenuItem value={100}>under 100$</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectPrice;
