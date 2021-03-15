import {useDispatch, useSelector} from "react-redux";
import React from 'react';
import TestCmp from "./TestCmp";
import {dataSelector} from "./store/selectors/main";

const App = () => {

	const data = useSelector(dataSelector);
	const dispatch = useDispatch();

	const onChange = (e) => {
		const value = e.target.value;
		dispatch({type: 'ADD_DATA', data: value});
	}

	return (
		<div>
			<input value={data} onChange={onChange}/>
			<TestCmp/>
		</div>
	);
}

export default App;
