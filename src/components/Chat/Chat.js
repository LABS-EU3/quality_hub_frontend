import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import {
  saveRoomId,
  startChatFromScratch,
} from '../../state/actions/chatActions';

const StyledChatLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatLoader = props => {
  const { user, peer, saveRoomId, startChatFromScratch } = props;

  useEffect(() => {
    const id =
      user.role_id === 1
        ? `${user.email} ${peer.email}`
        : `${peer.email} ${user.email}`;

    startChatFromScratch(id, user, peer, saveRoomId, props);
  }, [peer, props, saveRoomId, startChatFromScratch, user]);

  return (
    <StyledChatLoader>
      <Loader
        type='TailSpin'
        color='#2BAD60'
        height={80}
        width={80}
      />
    </StyledChatLoader>
  );
};

const mapStateToProps = state => {
  return {
    peer: state.chatReducer.peer,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  saveRoomId,
  startChatFromScratch,
})(ChatLoader);
