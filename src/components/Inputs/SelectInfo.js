import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveSelect } from '../../state/actions/bookingActions';

const StyledSelectInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: 250,
    display: 'flex',
  },
}));

const SelectInfo = props => {
  const classes = useStyles();

  return (
    <StyledSelectInfo className='select-container'>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>Length</InputLabel>
        <Select
          defaultValue=''
          input={
            <Input
              onChange={props.saveSelect}
              name='length_id'
              id='length-select'
            />
          }
        >
          <MenuItem value={1}>30 Minutes</MenuItem>
          <MenuItem value={2}>1 Hour</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>Topic</InputLabel>
        <Select
          defaultValue=''
          input={
            <Input
              onChange={props.saveSelect}
              name='topic_id'
              id='topic-select'
            />
          }
        >
          <MenuItem value={1}>Frontend</MenuItem>
          <MenuItem value={2}>Backend</MenuItem>
          <MenuItem value={3}> Algortihms / Data Structes</MenuItem>
          <MenuItem value={4}>Behavorial Interview</MenuItem>
          <MenuItem value={5}>System Design</MenuItem>
          <MenuItem value={6}>React</MenuItem>
        </Select>
      </FormControl>
    </StyledSelectInfo>
  );
};

export default connect(null, { saveSelect })(SelectInfo);
