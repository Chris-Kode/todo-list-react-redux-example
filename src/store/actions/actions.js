export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const TOOGLE_TASK = "TOOGLE_TASK";
/*
 * action creators
 */

export function addTask(text) {
  return { type: ADD_TASK, text };
}

export function removeTask(index) {
  return { type: REMOVE_TASK, index };
}

export function toogleTask(index) {
  return { type: TOOGLE_TASK, index };
}
