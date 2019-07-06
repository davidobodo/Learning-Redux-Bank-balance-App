const reducer = (state, action) =>{
	switch(action.type){
		case "WITHDRAW":
			console.log(state)
			return {
				...state,
				totalAmount : state.totalAmount - action.amount
			};
		case "CHARITY":
			return{
				...state,
				totalAmount : state.totalAmount - action.giveaway
			};
		default:
			return state;
	}
}

export default reducer