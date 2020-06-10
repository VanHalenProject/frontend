import React, { Component } from "react";
export default class Selector extends Component {
	state = {
		value: this.props.selector.value,
	};

	handleIncrement = () => {
		this.setState(
			(prevState) => {
				return { value: prevState.value + 1 };
			},
			() => this.props.onIncrement(this.props.selector)
		);
	};

	handleDecrement = () => {
		this.setState(
			(prevState) => {
				return { value: prevState.value - 1 };
			},
			() => this.props.onDecrement(this.props.selector)
		);
	};

	handleReset = () => {
		this.setState(
			(prevState) => {
				return { value: 0 };
			},
			() => this.props.onReset(this.props.selector)
		);
	};

	render() {
		return (
			<div>
				{this.props.children}
				<span className="badge m-2 badge-warning">{this.state.value}</span>

				<button className="btnSkittleSelector" onClick={this.handleIncrement}>
					+
				</button>
				<button className="btnSkittleSelector" onClick={this.handleDecrement}>
					-
				</button>

				<button className="btnSkittleSelector" onClick={this.handleReset}>
					Reset
				</button>
			</div>
		);
	}
}
