import React, { Component } from "react";
export default class Selector extends Component {
	state = {
		amountSelected: 0,
		value: this.props.selector.value,
	};

	handleIncrement = () => {
		this.setState(
			(prevState) => {
				return { amountSelected: prevState.amountSelected + 1 };
			},
			() => this.props.onIncrement(this.props.selector)
		);
	};

	handleDecrement = () => {
		this.setState(
			(prevState) => {
				return { amountSelected: prevState.amountSelected - 1 };
			},
			() => this.props.onDecrement(this.props.selector)
		);
	};

	handleReset = () => {
		this.setState(
			(prevState) => {
				return { amountSelected: 0 };
			},
			() => this.props.onReset(this.props.selector)
		);
	};

	render() {
		return (
			<div>
				{this.props.children}
				<span className="badge m-2 badge-warning">
					{this.state.amountSelected}
				</span>
				{/* <button
					onClick={() => this.props.onIncrement(this.props.selector)}
					className="btn btn-secondary btn-sm m-2"
				>
					+
				</button>
				<button
					onClick={() => this.props.onDecrement(this.props.selector)}
					className="btn btn-secondary btn-sm m-2"
				>
					-
				</button> */}
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
				{/* <button
					onClick={() => this.props.onReset(this.props.selector)}
					className="btn btn-danger btn-sm m-2"
				>
					Reset
				</button> */}
				<button
					onClick={this.handleReset}
					className="btn btn-danger btn-sm m-2"
				>
					Reset
				</button>
			</div>
		);
	}
}

// changeRed =() => {
// 	const redSelector = this.state.skittleSelectors.findIndex(element => element.color === "Red");
// 	changeRed[redSelector] = {...changeRed[redSelector], availability: result.data.Red}
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

// onClick={() =>
// 	this.setState({
// 		value: 0,
// 	})
// }
