import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth.context";
import { sendMessage } from "../../utils/firebase.utils";

import "./message-input.styles.scss";

const MessageInput = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(user, value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <input
        className="message-input-textbox"
        type="text"
        placeholder="Enter a message"
        value={value}
        onChange={handleChange}
        required
        minLength={1}
      />
      <button
        type="submit"
        disabled={value.length < 1}
        className="send-message-button"
      >
        Send
      </button>
    </form>
  );
};
export default MessageInput;
