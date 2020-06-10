import React, { Component } from "react";
import Selector from "./selector";

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

	async componentDidMount() {
		const url =
			"https://0918fe64-9b80-413e-b721-6f8d296f9ff3.mock.pstmn.io?green=12&red=15&yellow=10&purple=2&orange=8";
			//https://vh-backend.herokuapp.com/api/skittles/sort
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);

		this.setState({
			skittleSelectors: [
				{
					id: 1,
					value: 0,
					color: "Green",
					availability: data.Green,
				},
				{
					id: 2,
					value: 0,
					color: "Red",
					availability: data.Red,
				},
				{
					id: 3,
					value: 0,
					color: "Yellow",
					availability: data.Yellow,
				},
				{
					id: 4,
					value: 0,
					color: "Purple",
					availability: data.Purple,
				},
				{
					id: 5,
					value: 0,
					color: "Orange",
					availability: data.Orange,
				},
			],
		});
	}

	handleIncrement = (selector) => {
		const selectors = [...this.state.skittleSelectors];
		const index = selectors.indexOf(selector);
		if (selectors[index].value < selectors[index].availability) {
			selectors[index].value++;
		} else {
			alert("No more skittles left");
		}

		console.log(selector);
	};

	handleDecrement = (selector) => {
		const selectors = [...this.state.skittleSelectors];
		const index = selectors.indexOf(selector);
		if (selectors[index].value > 0) {
			selectors[index].value--;
		} else {
			alert("Amount can not be less then 0");
		}
		console.log(selector);
	};

	handleReset = (selector) => {
		const selectors = [...this.state.skittleSelectors];
		const index = selectors.indexOf(selector);
		selectors[index].value = 0;
	};

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
			green: greenValue,
			red: redValue,
			yellow: yellowValue,
			purple: purpleValue,
			orange: orangeValue,
		});

		const requestOptions = {
			method: "POST",
			//headers: { "Content-Type": "application/json" },
			body: sendData,
		};

		fetch(
			"https://vh-backend.herokuapp.com/api/skittles/sort",
			requestOptions
		).then((response) => response.json());
		console.log(sendData);
		//window.location.reload(false);
	};

	render() {
		return (
			<div className="skittleSelector">
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
						<p class="txtSkittleSelectorColor">{selector.color}:</p>
						<p class="txtSkittleSelector">
							Amount available: {selector.availability}
						</p>
					</Selector>
				))}
				<div>
					<button className="btnSend" onClick={this.postData}>
						Send
					</button>
				</div>
			</div>
		);
	}
}
