import React from "react";
import ReactDOM from "react-dom";
import './css/app.css';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Woneee ... " />, mountNode);
