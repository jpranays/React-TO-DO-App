import React, { Component } from "react";
class Todo extends Component {
	todoClear = () => {
		for (let x of this.props.todos) {
			if (x.value === this.props.todo_value) {
				this.props.todos.splice(this.props.todos.indexOf(x), 1);
				break;
			}
		}
		this.props.deleteTodo(this.props.todos);
		localStorage.setItem("todos", JSON.stringify(this.props.todos));
	};
	todoComplete = () => {
		for (let x of this.props.todos) {
			if (x.value === this.props.todo_value) {
				if (x.isCompleted) {
					x.isCompleted = false;
				} else {
					x.isCompleted = true;
				}
				break;
			}
		}
		this.props.completeTodo(this.props.todos);
		localStorage.setItem("todos", JSON.stringify(this.props.todos));
	};
	render() {
		let { todo_value, status } = this.props;
		return (
			<div className="todo">
				{status ? (
					<h2 style={{ textDecoration: "line-through" }}>{todo_value}</h2>
				) : (
					<h2>{todo_value}</h2>
				)}
				<button onClick={this.todoClear}>Clear</button>
				<button onClick={this.todoComplete}>Completed</button>
			</div>
		);
	}
}

export default Todo;
