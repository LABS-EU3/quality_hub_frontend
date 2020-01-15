import React from 'react';
import Input from '@material-ui/core/Input';

const SearchForKeyword = props => {
  return (
    <Input
      placeholder='Keyword'
      inputProps={{ 'aria-label': 'description' }}
      onChange={props.searchForKeyword}
    />
  );
};

export default SearchForKeyword;
