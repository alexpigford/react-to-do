import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add To-Do"
          value={this.state.title}
          onChange={this.onChange}
          style={{
            flex: "10",
            padding: "5px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{
            flex: "1",
            padding: "5px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        />
      </form>
    );
  }
}

// proptypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
