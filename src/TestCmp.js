import React from 'react';
import {useSelector} from "react-redux";
import {dataSelector} from "./store/selectors/main";

const TestCmp = () => {

	const data = useSelector(dataSelector);

	return (
		<div>
			state: {data}
		</div>
	);
}

export default TestCmp;
