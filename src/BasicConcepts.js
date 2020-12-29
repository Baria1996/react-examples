// create a react element
// const element = <h1>Hello!!!</h1>;
// the representation of that element in the virtual dom
// console.log(element);

// with function
// function showUser() {
//   return <h1>Hello!!!</h1>;
// }
// const element = showUser();

// with string interpolation
// const name = "barea";
// const element = `hello ${name}`;

// with jsx
// const name = "barea";
// const element = <h1>hello {name}</h1>;

// with function and jsx
// function getUser(name) {
//   return <h1>Hello {name} !!!</h1>;
// }
// const element = getUser("barea");

// render that element inside the real dom
// ReactDOM.render(element, document.getElementById("root"));

// use render after intervals
// function tick() {
//   const element = (
//     <div>
//       <h1>hello</h1>
//       <p> {new Date().toLocaleTimeString()} </p>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(tick, 1000);

// render with function
// const user = { fname: "john", lname: "doe" };
// function returnelement() {
//   return (
//     <div>
//       <h1>hello {getfullname(user)}</h1>
//     </div>
//   );
// }

// render with object and function
// const user = { fname: "john", lname: "doe" };
// function getfullname(u) {
//   return u.fname + " " + u.lname;
// }
// const element = (
//   <div>
//     <h1>hello {getfullname(user)}!</h1>
//   </div>
// );

// render a simple function component
// function Compo(props) {
//   return <h1>hello {props.name}</h1>;
// }
// const element = <Compo name="barea" />;
// ReactDOM.render(element, document.getElementById("root"));

// render a nested component
// function Compo(props) {
//   return <p>{props.name}</p>;
// }
// function Nest() {
//   return (
//     <React.Fragment>
//       <h1>hello...</h1>
//       <div>
//         <Compo name="Barea" />
//         <Compo name="Aziz" />
//         <Compo name="Siddiqui" />
//       </div>
//     </React.Fragment>
//   );
// }
// ReactDOM.render(<Nest />, document.getElementById("root"));

// CLOCK FUNCTION COMPONENT
// function Clock(props) {
//   return (
//     <div>
//       <h1>The time is: {props.date.toLocaleTimeString()} </h1>
//     </div>
//   );
// }
// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }
// setInterval(tick, 1000);

// CLOCK CLASS COMPONENT
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>time: {this.props.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));

// CLOCK CLASS COMPONENT WITH STATE
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(),
//     };
//   }

//   // React components automatically re-render whenever there is a change in
//   // their state or props. A simple update of the state, from anywhere in the code,
//   // causes all the User Interface (UI) elements to be re-rendered automatically.

//   // in this example, the following function is changing the state by calling tick()
//   // every 1 second after the componentDidMount() is called therefore
//   // causing this element to re-render with the new date
//   componentDidMount() {
//     this.timerID = setInterval(() => {
//       this.tick();
//     }, 1000);
//   }

//   // If the Clock component is ever removed from the DOM,
//   // React calls the componentWillUnmount() lifecycle method so the timer is stopped.
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       time: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Time: {this.state.time.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Clock />, document.getElementById("root"));

// TOGGLE BUTTON EXAMPLE
// class ToggleBtn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOn: true,
//     };
//   }
//   myClickHandler = () => {
//     this.setState({ isOn: !this.state.isOn });
//   };
//   render() {
//     return (
//       <button onClick={this.myClickHandler}>
//         {this.state.isOn ? "on" : "off"}
//       </button>
//     );
//   }
// }
// ReactDOM.render(<ToggleBtn />, document.getElementById("root"));

// CONDITIONAL RENDERING EXAMPLE
// function UserGreeting() {
//   return <h1>hello user</h1>;
// }

// function GuestGreeting() {
//   return <h1>hello guest</h1>;
// }

// // class Greeting extends React.Component {
// //   render() {
// //     if (this.props.isUser) return <UserGreeting />;
// //     return <GuestGreeting />;
// //   }
// // }

// function Greeting(props) {
//   if (props.isUser) return <UserGreeting />;
//   return <GuestGreeting />;
// }

// ReactDOM.render(<Greeting isUser={false} />, document.getElementById("root"));

// CONDITIONAL RENDERING WITH ELEMENT VARIABLES
// function UserGreeting() {
//   return <h1>Hello user</h1>;
// }

// function GuestGreeting() {
//   return <h1>Hello guest</h1>;
// }

// function Greeting(props) {
//   return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//     };
//     this.loginBtnClk = this.loginBtnClk.bind(this);
//     this.logoutBtnClk = this.logoutBtnClk.bind(this);
//   }

//   loginBtnClk() {
//     this.setState({ isLoggedIn: true });
//   }

//   logoutBtnClk() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     let myBtn = this.state.isLoggedIn ? (
//       <button onClick={this.logoutBtnClk}>logout</button>
//     ) : (
//       <button onClick={this.loginBtnClk}>login</button>
//     );

//     return (
//       <div>
//         <Greeting isLoggedIn={this.state.isLoggedIn} />
//         {myBtn}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<LoginControl />, document.getElementById("root"));

// INLINE IF WITH LOGICAL && OPERATOR
// function Mailbox(props) {
//   return (
//     <div>
//       <h1>hi!</h1>
//       {props.unreadMessages.length > 0 && (
//         <h1>you have {props.unreadMessages.length} unread Messages</h1>
//       )}
//     </div>
//   );
// }

// const messages = ["msg1", "msg2", "msg3"];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById("root")
// );

// RETURN NULL FROM A COMPONENT
// function Banner(props) {
//   return props.warn ? (
//     <div style={{ backgroundColor: "#ff0000", marginBottom: "1.1rem" }}>
//       warning!
//     </div>
//   ) : null;
// }
// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       warn: true,
//     };
//     this.toggleWarning = this.toggleWarning.bind(this);
//   }

//   toggleWarning() {
//     this.setState({ warn: !this.state.warn });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Banner warn={this.state.warn} />
//         <button onClick={this.toggleWarning}>
//           {this.state.warn ? "hide warning" : "show warning"}
//         </button>
//       </React.Fragment>
//     );
//   }
// }

// ReactDOM.render(<Page />, document.getElementById("root"));

// RENDERING MULTIPLE COMPONENTS
// function NumList(props) {
//   const ListItems = props.items.map((num) => (
//     <li key={num}>{"-" + num + "-"}</li>
//   ));
//   return <ul>{ListItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(<NumList items={numbers} />, document.getElementById("root"));

// EMBEDDING map() IN JSX
// function List(props) {
//   const items = props.items;
//   return (
//     <ul>
//       {items.map((item, n) => (
//         <li key={n}>{item}</li>
//       ))}
//     </ul>
//   );
// }
// const l = ["1", "2", "3"];
// ReactDOM.render(<List items={l} />, document.getElementById("root"));

// FORM ELEMENTS
// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // username: "",
//       // fruit: "",
//       // comments: "",
//       username: "enter name",
//       fruit: "mango",
//       comments: "leave a comment",
//     };
//     this.showFormData = this.showFormData.bind(this);
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.selectChangeHandler = this.selectChangeHandler.bind(this);
//     this.textareaChangeHandler = this.textareaChangeHandler.bind(this);
//   }

//   showFormData(e) {
//     console.log("name: " + this.state.username);
//     console.log("fruit: " + this.state.fruit);
//     console.log("comments: " + this.state.comments);
//     e.preventDefault();
//   }

//   inputChangeHandler(e) {
//     this.setState({ username: e.target.value });
//   }

//   selectChangeHandler(e) {
//     this.setState({ fruit: e.target.value });
//   }

//   textareaChangeHandler(e) {
//     this.setState({ comments: e.target.value });
//   }

//   render() {
//     return (
//       <form onSubmit={this.showFormData}>
//         <label>
//           User Name:
//           <input
//             type="text"
//             name="name"
//             value={this.state.username}
//             onChange={this.inputChangeHandler}
//           />
//         </label>
//         <br />
//         <label>User Fruit: </label>
//         <select value={this.state.fruit} onChange={this.selectChangeHandler}>
//           <option value="grapefruit">Grapefruit</option>
//           <option value="lime">Lime</option>
//           <option value="coconut">Coconut</option>
//           <option value="mango">Mango</option>
//         </select>
//         <br />
//         <label>
//           Comments:
//           <textarea
//             type="text"
//             name="name"
//             value={this.state.comments}
//             onChange={this.textareaChangeHandler}
//           />
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// FROM WITH NAME ATTRIBUTE
// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       comments: "",
//       fruits: "",
//     };
//   }

//   updateState = (e) => {
//     const nameproperty = e.target.name;
//     this.setState({
//       [nameproperty]: e.target.value,
//     });
//   };

//   showData = (e) => {
//     e.preventDefault();
//     console.log(this.state.username);
//     console.log(this.state.comments);
//   };

//   render() {
//     return (
//       <form onSubmit={this.showData}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="username"
//             value={this.state.username}
//             onChange={this.updateState}
//           />
//         </label>
//         <br />
//         <label>
//           input with value: (makes it a readonly input)
//           <input
//             type="text"
//             name="msg"
//             value="this is a message for the user"
//             onChange={this.updateState}
//           />
//         </label>
//         <br />
//         <label>
//           input with null: (makes it an uncontrolled component)
//           <input
//             type="text"
//             name="nullmsg"
//             value={undefined}
//             onChange={this.updateState}
//           />
//         </label>
//         <br />
//         <label>
//           Comments:
//           <textarea
//             name="comments"
//             value={this.state.comments}
//             onChange={this.updateState}
//           />
//         </label>
//         <br />
//         <input type="submit" />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<Form />, document.getElementById("root"));
