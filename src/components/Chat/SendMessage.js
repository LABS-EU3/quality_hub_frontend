import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const StyledSendMessage = styled.div`
  display: flex;
  .formDiv {
    padding: 15px;
    border: 1px solid #ced4da;
    border-radius: 15px;
    /* border-bottom: 1px #4c758f solid; */
    margin-left: 20px;
    margin-right: 2rem;
    width: 100%;
  }

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

  button {
    background: #4fad65;
    border: none;
    width: 5rem;
    height: 100%;
    margin-right: 3rem;
    border-radius: 5px;
  }
`;

const iconStyles = {
  color: 'white',
};

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
      <div className='formDiv'>
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
      <button>
        <SendIcon style={iconStyles} />
      </button>
    </StyledSendMessage>
  );
};

export default SendMessageForm;
