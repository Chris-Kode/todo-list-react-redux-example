import { ADD_TASK, REMOVE_TASK, TOOGLE_TASK } from "../actions/actions";

const default_state = {
  tasks: [],
};

export default function taskReducer(state = default_state, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            text: action.text,
            completed: false,
          },
        ],
      });
    case TOOGLE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, index) => {
          if (index === action.index) {
            return Object.assign({}, task, {
              completed: !task.completed,
            });
          }
          return task;
        }),
      });
    case REMOVE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((item, index) => {
          return index !== action.index;
        }),
      });

    default:
      return state;
  }
}
