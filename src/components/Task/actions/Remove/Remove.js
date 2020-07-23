import React from "react";
import "./Remove.css";
import { removeTask } from "../../../../store/actions/actions";
import { connect } from "react-redux";

class Remove extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }
  delete(index) {
    this.props.dispatch(removeTask(index));
  }
  render() {
    return (
      <div
        className="DeleteButton"
        onClick={() => {
          this.delete(this.props.index);
        }}
      >
        Delete
      </div>
    );
  }
}

export default connect()(Remove);
