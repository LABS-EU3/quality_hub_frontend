import React from 'react';
import uuid from 'uuid';

const UserList = props => {
  const { user, rooms, startChat } = props;

  return (
    <div>
      {rooms &&
        rooms.map(room => (
          <p key={uuid()} onClick={() => startChat(room.id)}>
            {user.role_id === 2
              ? room.custom_data.role_id_one
              : room.custom_data.role_id_two}
          </p>
        ))}
    </div>
  );
};

export default UserList;
