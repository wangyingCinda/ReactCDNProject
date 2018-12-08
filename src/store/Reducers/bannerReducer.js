const bannerReducer = (prevState=false,action)=>{


	let{type,payload} = action;

	switch(type){
		case "Hidebanner":
		return payload;
		case "Showbanner":
		return payload;	
		default:
		return prevState
	}

	return prevState
}



export default bannerReducer;