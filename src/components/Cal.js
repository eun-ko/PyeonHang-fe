import React, { Component } from 'react';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';

export default class Cal extends Component {
	constructor(props) {
		super(props);
		moment.locale('ko');

		this.state = {
			focused: true,
			date: props.initialDate,
		};

		this.onDateChange = this.onDateChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
	}

	onDateChange(date) {
		this.setState({ date });
	}

	onFocusChange() {
		this.setState({ focused: true });
	}

	alertPickedData = () => {
		alert(this.state.date);
	};

	render() {
		const { focused, date } = this.state;
		console.log(JSON.stringify(date));
		return (
			<div>
				<DayPickerSingleDateController
					onDateChange={this.onDateChange}
					onFocusChange={this.onFocusChange}
					focused={focused}
					date={date}
				/>
			</div>
		);
	}
}
