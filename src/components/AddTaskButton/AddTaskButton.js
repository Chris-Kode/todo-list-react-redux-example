import React from "react";
import "./AddTaskButton.css";
import { addTask } from "../../store/actions/actions";
import { connect } from "react-redux";

class AddTaskButton extends React.Component {
  constructor(props) {
    super(props);
    this.submitTask = this.submitTask.bind(this);
  }

  submitTask(text) {
    this.props.dispatch(addTask(text));
    this.props.OnSubmit();
  }

  render() {
    return (
      <div
        onClick={() => {
          this.submitTask(this.props.task);
        }}
        className="AddButton"
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect()(AddTaskButton);
