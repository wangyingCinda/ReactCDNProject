const sidebarReducer = (prevState=true,action)=>{


	let{type,payload} = action;

	switch(type){
		case "HideSidebar":
		return payload;
		case "ShowSidebar":
		return payload;	
		default:
		return prevState
	}

	
}



export default sidebarReducer;