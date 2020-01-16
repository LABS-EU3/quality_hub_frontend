import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import styled from 'styled-components';
import {
  getAppointment,
  cancelAppointment,
} from '../../state/actions/appointmentActions';
import { startInterview } from '../../state/actions/interviewActions';
import AppointmentCard from '../../components/Cards/AppointmentCard';
import LoaderSpinner from '../../utils/LoaderSpinner';
import ProfileSettings from '../../components/Forms/ProfileSettings';

const StyledUserDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const UserDashboard = props => {
  React.useEffect(() => {
    setTimeout(
      () => props.getAppointment(props.user.id, props.user.role_id),
      1000,
    );
  }, []);

  return (
    <div>
      Dashboard
      <StyledContainer>
        {props.appointments &&
          props.appointments.map(appointment => (
            <AppointmentCard
              key={uuid()}
              first_name={appointment.first_name}
              last_name={appointment.last_name}
              avatar_url={appointment.avatar_url}
              appointment_datetime={appointment.appointment_datetime}
              appointment_topic={appointment.appointment_topic}
              description={appointment.description}
              canceled={appointment.canceled}
              cancel={() => props.cancelAppointment(appointment.id)}
              startInterview={() =>
                props.startInterview(appointment.user_id, props)
              }
            />
          ))}
      </StyledContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    appointments: state.appointmentsReducer.appointments,
    loading: state.appointmentsReducer.isLoading,
  };
};

export default connect(mapStateToProps, {
  getAppointment,
  cancelAppointment,
  startInterview,
})(UserDashboard);

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-gap: 2em;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 65px;

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
      font-weight: 1.2rem;
      margin-bottom: 0;
    }
  }
`;
