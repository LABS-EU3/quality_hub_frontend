import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import styled from 'styled-components';
import {
  getAppointment,
  cancelAppointment,
} from '../../state/actions/appointmentActions';
import { startInterview } from '../../state/actions/interviewActions';
import AppointmentCard from '../../components/Cards/AppointmentCard';
import EmptyAppointment from '../../components/Cards/EmptyAppointmentCard';

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

const UserDashboard = props => {
  const {
    appointments,
    getAppointment,
    user,
    cancelAppointment,
    startInterview,
  } = props;
  React.useEffect(() => {
    setTimeout(() => getAppointment(user.id, user.role_id), 1000);
  }, [getAppointment, user.id, user.role_id]);

  return (
    <StyledContainer>
      {appointments ? (
        appointments.map(appointment => (
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
          />
        ))
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
})(UserDashboard);
