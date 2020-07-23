import React from "react";
import Remove from "./actions/Remove/Remove";
import Toogle from "./actions/Toogle/Toogle";
import "./Task.css";
class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <div>{this.props.data.text}</div>
        <div className="containerActions">
          <div className="eachAction">
            <Toogle
              index={this.props.index}
              completed={this.props.data.completed}
            />
          </div>
          <div>
            <Remove index={this.props.index} />
          </div>
        </div>
      </div>
    );
  }
}
export default Task;
