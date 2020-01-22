import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSendMessage = styled.div`
  padding: 20;
  border-top: 1px #4c758f solid;
  margin-bottom: 20;

  .form {
    display: flex;
  }

  .input {
    color: inherit;
    background: none;
    outline: none;
    border: none;
    flex: 1;
    font-size: 16;
  }
`;

const SendMessageForm = props => {
  const { onSubmit, onChange } = props;
  const [text, setText] = useState('');

  const onSubmission = e => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  const onChangeHandle = e => {
    setText(e.target.value);
    if (onChange) {
      onChange();
    }
  };
  return (
    <StyledSendMessage>
      <div>
        <form onSubmit={onSubmission} className='form'>
          <input
            type='text'
            placeholder='Type a message here then hit ENTER'
            onChange={onChangeHandle}
            value={text}
            className='input'
          />
        </form>
      </div>
    </StyledSendMessage>
  );
};

export default SendMessageForm;
