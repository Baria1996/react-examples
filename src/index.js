// import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Calculator from "./Calculator";
// import App from "./App";
// import HooksBasics from "./HooksBasics";
import { FriendStatus } from "./CustomHooks";

// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <FriendStatus friend={{ id: 12, name: "John Doe" }} />,
  document.getElementById("root")
);
