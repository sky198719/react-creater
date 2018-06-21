const initState = {
    style : 'alertbox'
};
export default function alertboxRe(state = initState, action) {
    switch (action.type) {
        case "BOX_STATE":
            return {
                style : action.style
            }
        default : 
            return state;
    }
}