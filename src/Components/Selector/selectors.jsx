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

	handleIncrement = (selector) => {
		const selectors = [...this.state.skittleSelectors];
		const index = selectors.indexOf(selector);
		if(selectors[index].value < selectors[index].availability){
			selectors[index].value++;
		} else {
			alert("No more skittles left")
		}
		
		console.log(selector);
	};

	handleDecrement = (selector) => {
		const selectors = [...this.state.skittleSelectors];
		const index = selectors.indexOf(selector);
		if(selectors[index].value > 0){
			selectors[index].value--;	
		} else{
			alert("Amount can not be less then 0")
		}
		console.log(selector);
	};

	handleReset = (selector) => {
		const selectors = [...this.state.skittleSelectors];
		const index = selectors.indexOf(selector);
		selectors[index].value = 0;
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

	postData = () => {
		const greenSelector = this.state.skittleSelectors.findIndex(
			(element) => element.color === "Green"
		);
		const redSelector = this.state.skittleSelectors.findIndex(
			(element) => element.color === "Red"
		);
		const yellowSelector = this.state.skittleSelectors.findIndex(
			(element) => element.color === "Yellow"
		);
		const purpleSelector = this.state.skittleSelectors.findIndex(
			(element) => element.color === "Purple"
		);
		const orangeSelector = this.state.skittleSelectors.findIndex(
			(element) => element.color === "Orange"
		);
		
		let greenValue = this.state.skittleSelectors[greenSelector].value;
		let redValue = this.state.skittleSelectors[redSelector].value;
		let yellowValue = this.state.skittleSelectors[yellowSelector].value;
		let purpleValue = this.state.skittleSelectors[purpleSelector].value;
		let orangeValue = this.state.skittleSelectors[orangeSelector].value;
		
		let sendData = JSON.stringify({
			Green: greenValue,
			Red: redValue,
			Yellow: yellowValue,
			Purple: purpleValue,
			Orange: orangeValue
		})
		
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: sendData
		};
		fetch('https://0918fe64-9b80-413e-b721-6f8d296f9ff3.mock.pstmn.io?Green&Red&Yellow&Purple&Orange', requestOptions)
			.then(response => response.json())
			console.log(sendData);
	};


	render() {
		return (
			<div>
				<button onClick={this.getSkittleAvailibility}>GETDATA</button>
				<button onClick={this.postData}>POSTDATA</button>
				{this.state.skittleSelectors.map((selector) => (
					<Selector
						value={this.state.value}
						key={selector.id}
						selector={selector}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onReset={this.handleReset}
						onChangedValue={this.onChangedValue}
					>
						<p>{selector.color}:</p>
						<p>amount availible: {selector.availability}</p>
					</Selector>
				))}
			</div>
		);
	}
}
