import React from "react";
import store from "./store";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import Task from "./components/Task/Task";
import InputTextTask from "./components/InputTextTask/InputTextTask";
import { connect } from "react-redux";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      taskText: "",
      tasks: [],
    };
    this.textChange = this.handleTaskTextChange.bind(this);
    this.submit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ tasks: store.getState().store.tasks });
    });
  }

  handleTaskTextChange(event) {
    this.setState({ taskText: event });
  }

  handleSubmit() {
    this.setState({ taskText: "" });
  }

  render() {
    return (
      <div className="App">
        <div className="Card">
          <h1>My TODO List</h1>
          <div className="margin-20">
            <InputTextTask
              value={this.state.taskText}
              placeholder="Write your new task"
              onChange={this.textChange}
            />
          </div>
          {this.state.tasks.length > 0 && (
            <div className="margin-20">
              {this.state.tasks.map((item, index) => {
                return (
                  <div className="eachTask" key={index}>
                    <Task data={item} index={index} />
                  </div>
                );
              })}
            </div>
          )}
          <div className="margin-20">
            <AddTaskButton task={this.state.taskText} OnSubmit={this.submit}>
              Add Task
            </AddTaskButton>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(App);
