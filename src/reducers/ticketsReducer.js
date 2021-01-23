import { 
    FETCH_TICKETS, 
    FILTER_TICKETS,
    SORT_CHEAP_TICKETS, 
    SORT_FAST_TICKETS 
} from '../constants'

const initialState = {
    tickets : [],
}



export const ticketsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS:
            return { ...state, tickets: action.payload }
        case SORT_CHEAP_TICKETS:
            return { ...state, tickets : action.payload }
        case SORT_FAST_TICKETS:
            return {...state, tickets: action.payload }
        case FILTER_TICKETS:
            return { ...state, tickets: action.payload }
        default:
            return state;
    }
    
}

