import React, { Component } from 'react';
import Pusher from 'pusher-js';
import Peer from 'simple-peer';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MediaHandler from '../utils/MediaHandler';

const StyledVideoChat = styled.div`
  width: 500px;
  height: 380px;
  margin: 0px auto;
  border: 2px solid #645cff;
  position: relative;
  box-shadow: 1px 1px 11px #9e9e9e;

  .my-video {
    width: 130px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    border: 6px solid #2196f3;
    border-radius: 6px;
    z-index: 2;
  }

  .user-video {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const APP_KEY = '9ebd578e6fc08eeb098e';

class VideoChat extends Component {
  constructor() {
    super();

    this.state = {
      hasMedia: false,
      otherUserId: null,
      user: null,
    };

    this.peers = {};

    this.mediaHandler = new MediaHandler();
  }

  componentWillMount = () => {
    this.setState({
      user: {
        id: this.props.user.user_id,
        name: this.props.user.email,
      },
    });

    setTimeout(
      () =>
        this.mediaHandler.getPermissions().then(stream => {
          this.setState({
            hasMedia: true,
            user: { ...this.state.user, stream: stream },
          });

          try {
            this.myVideo.srcObject = stream;
          } catch (e) {
            this.myVideo.src = URL.createObjectURL(stream);
          }

          this.myVideo.play();
        }),
      1000,
    );
    setTimeout(() => this.setupPusher(), 2000);
  };

  setupPusher = () => {
    // `${process.env.REACT_APP_BASE_URL}video`
    Pusher.logToConsole = true;
    this.pusher = new Pusher(APP_KEY, {
      authEndpoint: `http://localhost:5000/video`,
      cluster: 'eu',
      auth: {
        params: this.state.user.id,
        headers: {
          'authorization': localStorage.getItem('token'),
        },
      },
    });

    this.channel = this.pusher.subscribe(`presence-video-channel`);

    this.channel.bind(
      `client-signal-${this.state.user.id}`,
      signal => {
        let peer = this.peers[signal.userId];

        // if peer is not already exists, we got an incoming call
        if (peer === undefined) {
          this.setState({ otherUserId: signal.userId });
          peer = this.startPeer(signal.userId, false);
        }

        peer.signal(signal.data);
      },
    );
  };

  startPeer = (userId, initiator = true) => {
    const peer = new Peer({
      initiator,
      stream: this.state.user.stream,
      trickle: false,
    });

    peer.on('signal', data => {
      this.channel.trigger(`client-signal-${userId}`, {
        type: 'signal',
        userId: this.state.user.id,
        data: data,
      });
    });

    peer.on('stream', stream => {
      try {
        this.userVideo.srcObject = stream;
      } catch (e) {
        this.userVideo.src = URL.createObjectURL(stream);
      }

      this.userVideo.play();
    });

    peer.on('close', () => {
      let peer = this.peers[userId];
      if (peer !== undefined) {
        peer.destroy();
      }

      this.peers[userId] = undefined;
    });

    return peer;
  };

  callTo = userId => {
    console.log(userId)
    this.peers[userId] = this.startPeer(userId);
  };

  render() {
    return (
      <div>
        {this.props.peerId
          ? [this.props.peerId].map(userId => (
              <button
                key={userId}
                onClick={() => this.callTo(userId)}
              >
                Call to Person
              </button>
            ))
          : null}
        <StyledVideoChat>
          <div className='video-container'>
            <video
              className='my-video'
              ref={ref => {
                this.myVideo = ref;
              }}
            ></video>
            <video
              className='user-video'
              ref={ref => {
                this.userVideo = ref;
              }}
            ></video>
          </div>
        </StyledVideoChat>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    peerId: state.interviewReducer.peerId,
  };
};

export default connect(mapStateToProps)(VideoChat);
