import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import SendMessageForm from './SendMessage';
import UserList from './UserList';
import { getRooms } from '../../state/actions/chatActions';
import TypingIndicator from './TypingIndicator';
const StyledChatScreen = styled.div`
  border-top: 1px solid #ced4da;
  height: 85vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  width: 100%;

  .chat-container {
    display: flex;
    flex: 1;
    width: 100%;
  }

  .whos-online-list-container {
    margin-top: 1rem;
    padding-top: 1rem;
    border: 1px solid #ced4da;
    width: 30%;
    flex: none;
    color: 	#2F4F4F;
    border-radius: 5px;
    text-align: center;
    font-family: 'Ubuntu, sans-serif';

    h5 {
    padding-left: 1rem;  
    padding-right: 1rem;
    font-size: 1.15rem;  
    }

    .smallerP {
      font-size: 1.1rem;
    }

  }

  .chat-list-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
class ChatScreen extends React.Component {
  state = {
    currentUser: {},
    currentRoom: {},
    messages: [],
    error: null,
    usersWhoAreTyping: [],
  };

  componentDidMount = () => {
    this.props.getRooms(this.props.user.email);

    if (this.props.roomId) this.startChat(this.props.roomId);
  };

  startChat = roomId => {
    this.setState({ messages: [] });

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74',
      userId: this.props.user.email,
      tokenProvider: new Chatkit.TokenProvider({
        url: `${process.env.REACT_APP_BASE_URL}chat/auth`,
      }),
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
        return currentUser.subscribeToRoom({
          roomId,
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              });
            },
            onUserStartedTyping: user => {
              this.setState({
                usersWhoAreTyping: [
                  ...this.state.usersWhoAreTyping,
                  user.name,
                ],
              });
            },
            onUserStoppedTyping: user => {
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name,
                ),
              });
            },
          },
        });
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
      })
      .catch(error => this.setState({ error }));
  };

  sendMessage = text => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id,
    });
  };

  sendTypingEvent = () => {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <StyledChatScreen>
        <div className='chat-container'>
          <aside className='whos-online-list-container'>
            <h5>Your Chats</h5>
            <h5 className='smallerP'>Select a conversation to send a message</h5>
            <UserList
              rooms={this.props.rooms}
              user={this.props.user}
              startChat={this.startChat}
            />
          </aside>
          <section className='chat-list-container'>
            <MessageList messages={this.state.messages} />
            <TypingIndicator
              usersWhoAreTyping={this.state.usersWhoAreTyping}
            />
            <SendMessageForm
              onSubmit={this.sendMessage}
              onChange={this.sendTypingEvent}
            />
          </section>
        </div>
      </StyledChatScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomId: state.chatReducer.roomId,
    messages: state.chatReducer.messages,
    rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getRooms })(ChatScreen);
