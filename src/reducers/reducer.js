const reducer = (state, action) =>{
	switch(action.type){
		case "WITHDRAW":
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