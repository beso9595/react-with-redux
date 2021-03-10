import React from 'react';
import {setData} from "./store/actions/main";
import {connect} from "react-redux";

class TestCmp extends React.Component {

	render() {
		const {data} = this.props;
		return (
			<div>
				state: {data}
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		data: state.mainReducer.data,
	}
}
const mapDispatchToProps = {setData}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TestCmp);
