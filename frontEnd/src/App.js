import React, {Component} from "react";

class App extends Component {

  state = {
    clicks: 0
  };

  getUsers = () => {
    this.setState({clicks: this.state.clicks+1});
    console.log("hiya")
  }

  render() {
      return <span>
        <span>{this.state.clicks}</span>
        <button onClick={this.getUsers}>clickme</button>
        </span>;
  }

}

export default App;
