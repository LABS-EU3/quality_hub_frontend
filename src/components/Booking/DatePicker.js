import React from 'react';
import styled from 'styled-components';
import Calendar from 'antd/lib/calendar';
import 'antd/lib/calendar/style/index.css';
import 'antd/lib/select/style/index.css';
import 'antd/lib/radio/style/index.css';

import TimePicker from './TimePicker';

const StyledCalendar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .calender-container {
    padding: 1rem;
    border-radius: 6px;
    box-shadow: 0 6px 10px #d3d3d3;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const DatePicker = props => {
  return (
    <StyledCalendar className='appointment-container'>
      <div className='calender-container'>
        <Calendar
          className='calender'
          onSelect={date => props.saveDate(date._d)}
          fullscreen={false}
        />
      </div>
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
