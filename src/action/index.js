import { 
    FETCH_TICKETS, 
    HIDE_LOADER, 
    SHOW_LOADER, 
    SORT_CHEAP_TICKETS, 
    SORT_FAST_TICKETS, 
    FILTER_TICKETS
} from '../constants'


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchTickets() {
    return async dispatch => {   
            dispatch(showLoader())
            let response = await fetch('https://front-test.beta.aviasales.ru/search');
            let data = await response.json();
            let response2 = await fetch(`https://front-test.beta.aviasales.ru/tickets?${Object.keys(data).map(elem =>`${elem}=${data[elem]}`)}`)
            if(response2.status === 200) {
                let data2 = await response2.json();
                dispatch({ type: FETCH_TICKETS, payload: data2.tickets })
                dispatch(sortCheapTicket(data2.tickets))
            } else {
                console.log('Error');
            }
            dispatch(hideLoader())
    }
}


export const sortCheapTicket = sort => ({
    type: SORT_CHEAP_TICKETS,
    payload: sort.slice().sort((a, b) => a.price - b.price)
})

export const sortFastTicket = sort => ({
    type: SORT_FAST_TICKETS,
    payload: sort
    .slice().sort((a, b) => 
    (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration) )
})

export const filterTickets = (filter, fil) => ({
    type: FILTER_TICKETS,
    payload: filter.filter(ticket => {
        if(Object.keys(fil).every(key => {
            return fil[key] === false
        })) {
            return ticket
        }
        if(fil.all) return ticket;
        if(fil.without && ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) return true;
        if(fil.one && ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) return true;
        if(fil.two && ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) return true;
        if(fil.three && ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) return true;
        return false;
    })
})





