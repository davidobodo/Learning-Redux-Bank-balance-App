export const withdrawal = (amount)=> {
	return {
		type: "WITHDRAW",
		amount
	}
}

export const charity = (giveaway) => {
	return {
		type: "CHARITY",
		giveaway
	}
}