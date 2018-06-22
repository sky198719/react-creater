const initState = {
    classname : 'alertbox',
    background : '#eeeeee'
}

export function alertboxRe(state = initState.classname,action){
    switch(action.type){
        case "BOX_STATE":
            return {
                classname : action.classname
            }
        default : 
            return state
    }
}

export function alertboxCbg(state = initState.background,action){
	switch(action.type){
		case "BOX_BG" :
			return{
				background : action.background
			}
		default :
			return state
	}
}