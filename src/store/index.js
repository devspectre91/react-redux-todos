import { createStore } from "redux";

function reducer(todos = [], action) {
    switch (action.type) {
      case "add":
        todos.push(action.todo);
        return [...todos];
      case "remove":
        todos.splice(action.itemId, 1);
       return [...todos];
       case "toggle":
           todos[action.itemId].isDone= !todos[action.itemId].isDone;
         return [...todos];
      default:
        return [...todos];
    }
  }
let store = createStore(reducer);

export default store;
