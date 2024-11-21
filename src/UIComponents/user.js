import React from "react";

class Newuser extends React.Component {
  constructor(props) {
    super(props);
    console.log("Second constructor");
    this.state = {
      count: 0,
      userInfo: {},
    };
  }

  async componentDidMount() {
    console.log("Second componentDidMount");
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();

      this.setState({
        userInfo: data[0],
      });
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    this.timeOut = setInterval(() => {
      console.log("Interval");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("Second componentDidUpdate");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.timeOut);
  }

  render() {
    console.log("Second render");
    console.log(this.state.userInfo);

    return (
      <div className="usercard">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {this.props.increase || "Increase Count"}
        </button>
        <div>
          <h2>{this.state.userInfo.name || "Loading..."}</h2>
          {this.state.count === 1 && <h3>{`Count is now ${this.state.count}`}</h3>}
        </div>
      </div>
    );
  }
}

export default Newuser;
