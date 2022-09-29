import React from "react";

import "./message.styles.scss";

const Message = ({
  message: { displayName, text, timestamp },
  isOwnMessage,
}) => (
  <div className={`message-container ${isOwnMessage ? "own-message" : ""}`}>
    <p className="username">{displayName}</p>
    <p className="message-text-container">{text}</p>
  </div>
);

export default Message;
