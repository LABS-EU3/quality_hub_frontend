import React from 'react';
import styled from 'styled-components';
import Calendar from 'antd/lib/calendar';
import 'antd/lib/calendar/style/index.css';
import 'antd/lib/select/style/index.css';
import 'antd/lib/radio/style/index.css';

import TimePicker from './TimePicker';

const StyledCalendar = styled.div`
  display: flex;
  float: left;
  align-items: center;

  /* .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  } */
`;

const DatePicker = props => {
  return (
    <StyledCalendar>
      <div
        style={{
          width: 300,
          border: '1px solid #d9d9d9',
          borderRadius: 4,
        }}
      >
        <Calendar
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
