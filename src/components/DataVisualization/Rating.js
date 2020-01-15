import React from 'react';
import MatRating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const Rating = props => {
  return (
    <Box component='fieldset' mb={3} borderColor='transparent'>
      <MatRating name='read-only' value={props.rating} readOnly />
    </Box>
  );
};

export default Rating;
