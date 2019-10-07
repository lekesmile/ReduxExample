// Store

const Store = createStore();


const initiaState = {
    number: 0
}

const rootReducer = (state = initiaState, action) => {
    if (action.type === 'INC_COUNTER') {
        return{
           ...state, number: state.counter + 1 
        }
        
    }

    if (action.type === 'ADD_COUNTER') {
        return{
         ...state, number: state.counter + action.value
        }
   
    }

return state;
}

// Dispactching actions

Store.dispatch({ type: 'INC_NUMBER' })
Store.dispatch({ type: 'DEC_NUMBER' })
Store.dispatch({ type: 'ADD_NUMBER', value: 5 })