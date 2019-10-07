const initiaState = {
    number: 0
}



const reducer = (state = initiaState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state, number: state.number + 1
        }
    }
    else if (action.type === "DECREMENT") {
        return {
            ...state, number: state.number - 1
        }
    }
    else if (action.type === "ADD") {
        return {
            ...state, number: state.number + 5
        }
    }
    else if (action.type === "SUB") {
        return {
            ...state, number: state.number - 5
        }
    }
    return state;
}


export default reducer;