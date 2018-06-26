export const alertboxAct = (classname) => {
    return {
        type : 'BOX_STATE',
        classname
    }
}

export const alertboxBg = (background) => {
	return {
		type : 'BOX_BG',
		background
	}
}

export const alertboxMsg = (message) => {
	return {
		type : 'BOX_MESSAGE',
		message
	}
}

export const alertboxInfo = () => {
	return {
		type : 'BOX_INFO',
		message : '我猜你是码农'
	}
}

export const alertboxFromre = () => {
	return {
		type : 'BOX_RE'
	}
}