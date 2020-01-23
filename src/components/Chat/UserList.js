import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

const UserListStyle = styled.div`
  border-top: 1px solid #ced4da;
  padding: 1.4rem;
  border-bottom: none;

  &:hover {
    background: #4fad65;
    color: white;
    padding: 1.4rem;
    border-radius: 5px;
  }
`;

const UserList = props => {
  const { user, rooms, startChat } = props;

  return (
    <>
      {rooms &&
        rooms.map(room => (
          <UserListStyle
            key={uuid()}
            onClick={() => startChat(room.id)}
          >
            {user.role_id === 2
              ? room.custom_data.role_id_one
              : room.custom_data.role_id_two}
          </UserListStyle>
        ))}
    </>
  );
};

export default UserList;
