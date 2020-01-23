import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  LineChart,
  Line,
  Label,
  YAxis,
  Tooltip,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from 'recharts';

const StudentChart = ({ feedback }) => {
  const feedbackData = feedback.feedback.map(el => ({
    rating: el.rating,
    time: el.appointment_datetime,
  }));

  const formatXAxis = tick => moment(tick).format('MMM Do YYYY');

  const CustomTooltip = props => {
    if (props.active) {
      return (
        <div>
          <p style={{ width: '100px' }}>
            {`You received a rating of ${
              props.payload[0].payload.rating
            } for your coaching session on ${moment(
              props.label,
            ).format('MMMM Do YYYY')}.`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer height='100%'>
      <LineChart width={800} height={400} data={feedbackData}>
        <Line
          type='monotone'
          dataKey='rating'
          stroke='#4fad65'
          strokeWidth={2}
          fill='#4fad65'
        />
        <CartesianGrid stroke='ccc' />
        <XAxis tickFormatter={formatXAxis} dataKey='time'></XAxis>
        <YAxis>
          {<Label value='Rating' position='insideLeft' offset={-6} />}
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

const mapStateToProps = state => ({
  feedback: state.feedbackReducer,
});

export default connect(mapStateToProps)(StudentChart);
