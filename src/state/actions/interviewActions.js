export const VIDEO_START = 'VIDEO_START';
export const VIDEO_ERROR = 'VIDEO_ERROR';
export const VIDEO_SUCCESSFUL = 'VIDEO_SUCCESSFUL';

export const startInterview = (peerId, props) => {
  props.history.push('/interview');
  return { type: VIDEO_SUCCESSFUL, payload: peerId };
};
