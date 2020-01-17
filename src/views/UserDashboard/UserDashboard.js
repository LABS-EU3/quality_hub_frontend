import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import styled from 'styled-components';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/index.css';
import {
  getAppointment,
  cancelAppointment,
} from '../../state/actions/appointmentActions';
import { saveIdRole } from '../../state/actions/feedbackActions';
import { startInterview } from '../../state/actions/interviewActions';
import AppointmentCard from '../../components/Cards/AppointmentCard';
import EmptyAppointment from '../../components/Cards/EmptyAppointmentCard';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 65px;

  .appointments {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .ant-pagination-item-active {
      border-color: #4fad65;
    }

    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }

  @media (max-width: 768px) {
    max-width: 650px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    max-width: 350px;
    grid-template-columns: 1fr;
  }

  & > div.appointment-card {
    background: #fff;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 0px 4px rgba(82, 68, 110, 0.3);
  }

  .card-thumbnail {
    height: 80px;
    width: 80px;
    border-radius: 5px;
    position: relative;

    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card-description {
    margin: 1.5rem 0 0;
    color: #000;

    h2,
    h3 {
      font-weight: bold;
    }

    h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-weight: 600;
      margin-bottom: 0;
    }
  }
`;

const UserDashboard = props => {
  const {
    appointments,
    getAppointment,
    user,
    cancelAppointment,
    startInterview,
    saveIdRole,
  } = props;

  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(6);

  React.useEffect(() => {
    setTimeout(() => getAppointment(user.id, user.role_id), 1000);
  }, [getAppointment, user.id, user.role_id]);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };
  return (
    <StyledContainer>
      {appointments && appointments.length ? (
        <div className='appointments'>
          {appointments.slice(minValue, maxValue).map(appointment => (
            <AppointmentCard
              key={uuid()}
              first_name={appointment.first_name}
              last_name={appointment.last_name}
              avatar_url={appointment.avatar_url}
              appointment_datetime={appointment.appointment_datetime}
              appointment_topic={appointment.appointment_topic}
              description={appointment.description}
              canceled={appointment.canceled}
              cancel={() => cancelAppointment(appointment.id)}
              startInterview={() =>
                startInterview(appointment.user_id, props)
              }
              saveIdRole={() =>
                saveIdRole(appointment.role_id, appointment.id)
              }
            />
          ))}
          <div className='pagination'>
            <Pagination
              defaultCurrent={1}
              defaultPageSize={6}
              onChange={handlePagination}
              total={appointments.length}
            />
          </div>
        </div>
      ) : (
        <EmptyAppointment />
      )}
    </StyledContainer>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    appointments: state.appointmentsReducer.appointments,
  };
};

export default connect(mapStateToProps, {
  getAppointment,
  cancelAppointment,
  startInterview,
  saveIdRole,
})(UserDashboard);
