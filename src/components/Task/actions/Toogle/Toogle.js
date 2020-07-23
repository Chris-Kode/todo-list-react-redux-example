import React from "react";
import "./Toogle.css";
import { toogleTask } from "../../../../store/actions/actions";
import { connect } from "react-redux";

class Toogle extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle(index) {
    this.props.dispatch(toogleTask(index));
  }
  render() {
    return (
      <div
        className={"ToggleButton " + (this.props.completed ? "didit" : "todo")}
        onClick={() => {
          this.toggle(this.props.index);
        }}
      >
        <span>{this.props.completed ? "Did it" : "To do"}</span>
      </div>
    );
  }
}

export default connect()(Toogle);
