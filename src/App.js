import {connect} from "react-redux";
import {setData} from "./store/actions/main";
import React from 'react';
import TestCmp from "./TestCmp";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: '',
		};
	}

	onChange = (e) => {
		const value = e.target.value;
		this.props.setData(value); // with matDispatchToProps
		// this.props.dispatch({type: 'ADD_DATA', data: value}); // without matDispatchToProps
		this.setState({
			...this.state,
			data: value,
		});
	}

	render() {
		return (
			<div>
				<input value={this.state.data} onChange={this.onChange}/>
				<TestCmp/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.data,
	}
}
const mapDispatchToProps = {setData}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)
