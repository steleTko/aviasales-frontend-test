export function ticketNormalize(arrOTicket) {

    function priceNormalize(price) {
        return price
        .toString()
        .split('')
        .reverse()
        .reduce((acc, char, i) =>{
            if(i % 3 === 0) {
                return acc + " " + char;
            }
            return acc + char;
        },"P ")
        .split('')
        .reverse()
        .join('')
    }

    function timeOutIn(date, time) {
        let dateOut = new Date(date);
        const outHours = dateOut.getHours();
        const outMinutes = dateOut.getMinutes();
        const inHourse = new Date(dateOut.setHours(dateOut.getHours() + Math.ceil(time / 60))).getHours();
        const inMinutes = new Date(dateOut.setMinutes(dateOut.getMinutes() + time)).getMinutes();


        return (
            outHours + ":" + outMinutes 
            + " - " + 
            inHourse +":" + inMinutes                                  
        )
    }

    function timeInTrack(duration) {
        return Math.ceil(duration / 60) + ":" + (duration % 60)
    }

    function stops(Stops) {
        switch(Stops) {
            case 0:
                return "Без пересадок";
            case 1:
                return "1 пересадка";
            default:
                return `${Stops} пересадки`;
        }
    }

    function outIn(arroutIn) {
        return arroutIn.map(road => {
            return {
                id: road.date,
                out: `${road.origin} - ${road.destination}`,
                outTime: timeOutIn(road.date, road.duration),
                timeInTrack: timeInTrack(road.duration),
                stops: stops(road.stops.length),
                stopsC: road.stops.join(", ")
            }
        })
    }

    return arrOTicket.map(ticket => {
        return {
            id: ticket.segments[0].date + ticket.segments[1].date,
            price: priceNormalize(ticket.price),
            carrier: `//pics.avs.io/99/36/${ticket.carrier}.png`,
            segments: outIn(ticket.segments)
        }
    })
}
