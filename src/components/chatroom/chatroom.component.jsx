import React, { useState, useEffect, useContext } from "react";

import MessageInput from "../message-input/message-input.component";
import Message from "../message/message.component";

import { AuthContext } from "../../contexts/auth.context";
import { getMessages } from "../../utils/firebase.utils";

import "./chatroom.styles.scss";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = getMessages(setMessages);
    return unsubscribe;
  }, []);

  return (
    <div className="chatroom-container">
      <ul className="messages-container">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwnMessage={message.uid === user.uid}
          />
        ))}
      </ul>
      <MessageInput />
    </div>
  );
};
export default ChatRoom;
