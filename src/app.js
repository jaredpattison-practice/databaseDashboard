import React from "react";
import Q from "./lib/subscriber.js";
const database = new Q("database");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };

    database.subscribe("create", payload => {
      this.updateMessage(payload);
    });
  }

  updateMessage = message => {
    console.log("create happened", message);
    this.setState({ message });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Database Actions</h2>
        <p>Create: {this.state.message.collection}</p>
        <p>ID: {this.state.message.id}</p>
      </React.Fragment>
    );
  }
}

export default App;
