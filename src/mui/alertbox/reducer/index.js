const initState = {
    classname : 'alertbox',
    background : '#eeeeee',
    message : '你是码农吗'
}

export function alertboxRe(state = initState.classname,action){
    switch(action.type){
        case "BOX_STATE" :
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
			return {
				background : action.background
			}
		default :
			return state
	}
}

export function alertboxCmsg(state = initState.message,action){
    switch(action.type){
        case "BOX_MESSAGE" :
            return {
                message : action.message
            }
        case "BOX_INFO" :
            return {
                message : action.message
            }
        case "BOX_RE" :
            return {
                message : '你猜'
            }
        default : 
            return state
    }
}