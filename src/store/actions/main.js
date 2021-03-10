export const MainActions = {
	ADD_DATA: 'ADD_DATA',
}

export const setData = (data) => ({
	type: MainActions.ADD_DATA,
	data,
})
