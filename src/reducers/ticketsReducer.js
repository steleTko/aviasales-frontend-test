import { 
    FETCH_TICKETS, 
    FILTER_TICKETS,
    RESET_TICKETS_STATE,
    SORT_CHEAP_TICKETS, 
    SORT_FAST_TICKETS 
} from '../constants'

export const initialState = {
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
        case RESET_TICKETS_STATE:
            return { ...initialState }
        default:
            return state;
    }
}

