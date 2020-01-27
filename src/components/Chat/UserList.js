import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

const UserListStyle = styled.div`
  position: static;

  .bg {
    border-top: 1px solid #ced4da;
    padding: 1rem;
    border-bottom: none;
    cursor: pointer;
  }

  .bgClicked {
    background: #4fad65;
    border-top: 1px solid #ced4da;
    padding: 1rem;
    border-bottom: none;
    cursor: pointer;
    color: white;
  }
`;

const UserList = props => {
  const { user, rooms, startChat } = props;
  const [clickedIndex, setClickedindex] = useState(0);
  const handleClick = index => {
    setClickedindex(index);
  };

  return (
    <>
      {rooms &&
        rooms.map(room => (
          <UserListStyle
            key={uuid()}
            onClick={() => startChat(room.id)}
          >
            {' '}
            <ChangeStyle
              clicked={room === clickedIndex}
              onClick={() => handleClick(room)}
              userRole={
                user.role_id === 2
                  ? room.custom_data.role_id_one
                  : room.custom_data.role_id_two
              }
            />
          </UserListStyle>
        ))}
    </>
  );
};

const ChangeStyle = props => {
  return (
    <div
      className={props.clicked ? 'bgClicked' : 'bg'}
      onClick={props.onClick}
    >
      {props.userRole}
    </div>
  );
};

export default UserList;
