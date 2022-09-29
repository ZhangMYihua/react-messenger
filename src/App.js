import { useContext, Fragment } from "react";

import Login from "./components/login/login.component";
import ChatRoom from "./components/chatroom/chatroom.component";

import { AuthContext } from "./contexts/auth.context";

import "./app.scss";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="app-container">
      <h1>Chatroom Messenger </h1>
      {user ? (
        <Fragment>
          <h2>Signed in as {user.displayName}</h2>
          <ChatRoom />
        </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
