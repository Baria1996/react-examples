// import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./index.css";
// import Calculator from "./Calculator";
import App from "./App";
// import HooksBasics from "./HooksBasics";
import { FriendStatus } from "./CustomHooks";
import { FriendListItem } from "./CustomHooks";

// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <FriendStatus friend={{ id: 12, name: "John Doe" }} />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/app">App</Link>
          </li>
          <li>
            <Link to="/status">Friend Status</Link>
          </li>
          <li>
            <Link to="/item">Friend Item</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/status">
        <FriendStatus friend={{ id: 12, name: "John Doe" }} />
      </Route>
      <Route path="/item">
        <FriendListItem friend={{ id: 36, name: "Allan Walker" }} />
      </Route>
      <Redirect to="/app" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
