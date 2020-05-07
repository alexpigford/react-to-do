import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      marginBottom: "5px",
      backgroundColor: this.props.todo.completed ? "lightGreen" : "lightBlue",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p className="todo-item">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
        {completed ? <p>Done! Nice work.</p> : null}
      </div>
    );
  }
}

// proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
