import React, { Component } from "react";
export default class Selector extends Component {
	state = {
		value: this.props.selector.value,
	};

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	handleDecrement = () => {
		if (this.state.value === 0) {
			this.setState({ value: this.state.value - 1 });
		}
	};

	render() {
		return (
			<div>
				{this.props.children}
				<span className={this.getBadge()}>{this.state.value}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm m-2"
				>
					+
				</button>
				<button
					onClick={this.handleDecrement}
					className="btn btn-secondary btn-sm m-2"
				>
					-
				</button>
				<button
					onClick={() =>
						this.setState({
							value: 0,
						})
					}
					className="btn btn-danger btn-sm m-2"
				>
					Reset
				</button>
			</div>
		);
	}

	getBadge() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}
}

// changeRed =() => {
// 	const redSelector = this.state.skittleSelectors.findIndex(element => element.color === "Red");
// 	let changeRed = [...this.state.skittleSelectors];
// 	axios.get(
// 		"https://0918fe64-9b80-413e-b721-6f8d296f9ff3.mock.pstmn.io?Green=12&Red=15&Yellow=10&Purple=2&Orange=8"
// 	).then((result) => {
// 		changeRed[redSelector] = {...changeRed[redSelector], availability: result.data.Red}
// 	})
// 	.then(() => {
// 		this.setState({
// 			skittleSelectors: changeRed
// 		});
// });

// function changeColor(){
// 	changeGreen();
// 	changeRed();

// };
