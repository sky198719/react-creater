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