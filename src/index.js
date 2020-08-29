import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todo from "./Components/Todo";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: "",
			todo_list: [],
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		if (localStorage.getItem("todos")) {
			let todos = JSON.parse(localStorage.getItem("todos"));
			this.setState({ todo: "", todo_list: todos });
		}
	}
	handleChange(e) {
		e.preventDefault();
		let todos;
		if (localStorage.getItem("todos") === null) {
			todos = [];
		} else {
			todos = JSON.parse(localStorage.getItem("todos"));
		}
		todos.push({ value: this.state.todo, isCompleted: false });
		localStorage.setItem("todos", JSON.stringify(todos));
		this.setState({ todo: "", todo_list: todos });
	}
	updateTodo = (data) => {
		this.setState({
			todo_list: data,
		});
	};
	render() {
		return (
			<>
				<div className="container">
					<div className="form-cotainer">
						<form onSubmit={this.handleChange}>
							<input
								type="search"
								onChange={(e) => this.setState({ todo: e.target.value })}
								value={this.state.todo}
								onSubmit={this.handleChange}
								required
							/>
							<input type="submit" />
						</form>
					</div>
					<div className="todo-container">
						{this.state.todo_list.length ? (
							this.state.todo_list.map(({ value, isCompleted }, index) => (
								<Todo
									todo_value={value}
									key={index}
									deleteTodo={this.updateTodo}
									todos={this.state.todo_list}
									status={isCompleted}
									completeTodo={this.updateTodo}
								/>
							))
						) : (
							<h1>No Todos</h1>
						)}
					</div>
				</div>
			</>
		);
	}
}
ReactDOM.render(<App />, document.querySelector("#root"));
