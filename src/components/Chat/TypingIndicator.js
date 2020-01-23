import React from 'react';

const TypingIndicator = props => {
  if (props.usersWhoAreTyping.length > 0) {
    return (
      <div>
        {`${props.usersWhoAreTyping
          .slice(0, 2)
          .join(' and ')} is typing`}
      </div>
    );
  }
  return <div />;
};

export default TypingIndicator;
