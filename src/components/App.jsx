import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  handleEnter = (event) => {
    if (event.code === "Enter") {
      if (event.target.value.length === 0) {
        alert("Field cannot be empty");
      } else {
        let todoItem = {
          name:
            event.target.value[0].toUpperCase() +
            event.target.value.substring(1),
          isDone: false,
        };

        this.props.dispatch({ type: "add", todo: todoItem });
        event.target.value = "";
      }
    }
  };

  handleClick = (event) => {
    if ((event.target.dataset.ark === "delete")) {
        console.log("delete")
      this.props.dispatch({ type: "remove", itemId: event.target.dataset.id });
    } else if ((event.target.dataset.ark === "list-item")) {
        console.log("toggle")
      this.props.dispatch({ type: "toggle", itemId: event.target.dataset.id });
    }
  };

  render() {
    return (
      <>
        <header className="container">
          <h1 className="is-size-1 has-text-centered has-text-dark">Todos</h1>
          <div className="columns is-centered mx-6">
            <div className="field column is-three-quarters my-4">
              <div className="control">
                <input
                  onKeyPress={this.handleEnter}
                  id="input"
                  className="input px-4 py-5"
                  type="text"
                  placeholder="What needs to be done?"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="container">
          <div className="columns is-centered mx-6 is-multiline">
            <ul className="column is-three-quarters list-of-items">
              {this.props.state.map((todo, index) => {
                return (
                  <li
                    key={index}
                    className={
                      todo.isDone
                        ? "message m-0 mb-1 is-success"
                        : "message m-0 mb-1 is-white"
                    }
                  >
                    <div className="message-header pl-6 is-size-5 box">
                      <span
                        data-id={index}
                        data-ark='list-item'
                        onClick={this.handleClick}
                        className="pointer"
                      >
                        {todo.name}
                      </span>
                      <button
                        onClick={this.handleClick}
                        data-id={index}
                        data-ark='delete'
                        className="delete has-background-danger"
                      ></button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </>
    );
  }
}

export default connect((state) => {
  return { state };
})(App);
