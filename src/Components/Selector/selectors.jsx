import React, { Component } from "react";
import Selector from "./selector";
//import axios from "axios";

export default class Selectors extends Component {
	state = {
		skittleSelectors: [
			{ id: 1, value: 0, color: "Green", availability: 0 },
			{ id: 2, value: 0, color: "Red", availability: 0 },
			{ id: 3, value: 0, color: "Yellow", availability: 0 },
			{ id: 4, value: 0, color: "Purple", availability: 0 },
			{ id: 5, value: 0, color: "Orange", availability: 0 },
		],
	};

	// getSkittleAvailibility = () => {
	// 	axios
	// 		.get(
	// 			"https://0918fe64-9b80-413e-b721-6f8d296f9ff3.mock.pstmn.io?Green=12&Red=15&Yellow=10&Purple=2&Orange=8"
	// 		)
	// 		.then((result) => {
	// 			this.setState({
	// 				skittleSelectors: [
	// 					{
	// 						id: 1,
	// 						value: 0,
	// 						color: "Green",
	// 						availability: result.data.Green,
	// 					},
	// 					{
	// 						id: 2,
	// 						value: 0,
	// 						color: "Red",
	// 						availability: result.data.Red,
	// 					},
	// 					{
	// 						id: 3,
	// 						value: 0,
	// 						color: "Yellow",
	// 						availability: result.data.Yellow,
	// 					},
	// 					{
	// 						id: 4,
	// 						value: 0,
	// 						color: "Purple",
	// 						availability: result.data.Purple,
	// 					},
	// 					{
	// 						id: 5,
	// 						value: 0,
	// 						color: "Orange",
	// 						availability: result.data.Orange,
	// 					},
	// 				],
	// 			});
	// 		});
	// };

	handleReset = () => {
		const selectors = this.state.skittleSelectors.map((c) => {
			console.log(c.value);
			c.value = 0;
	
		});
		this.setState({ selectors });
	};

	render() {
		return (
			<div>
				<button onClick={this.getSkittleAvailibility}>GETDATA</button>
				<button>POSTDATA</button>
				{this.state.skittleSelectors.map((selector) => (
					<Selector
						key={selector.id}
						selector={selector}
						onReset={this.handleReset}
					>
						<p>{selector.color}:</p>
						<p>amount availible: {selector.availability}</p>
					</Selector>
				))}
			</div>
		);
	}
}
