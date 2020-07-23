import React from "react";
import "./InputTextTask.css";



class InputTextTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          className="InputTextTask"
          type="text"
          value={this.props.value}
          placeholder={this.props.placeholder}
        ></input>
      </div>
    );
  }
}
export default InputTextTask;
