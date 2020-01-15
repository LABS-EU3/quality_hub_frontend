import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import TimePicker from './TimePicker';

const StyledCalendar = styled.div`
  display: flex;

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const DatePicker = props => {
  return (
    <StyledCalendar>
      <Calendar
        onChange={date => props.saveDate(date)}
        value={new Date()}
      />
      <div className='right'>
        <TimePicker
          saveDate={date => props.saveDate(date)}
          date={props.date}
        />
        <h1>{props.date ? props.date.slice(0, 21) : null}</h1>
      </div>
    </StyledCalendar>
  );
};

export default DatePicker;
