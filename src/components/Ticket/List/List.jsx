import React from 'react';
import { Loader } from '../../Loader/Loader';
import './List.css';

export default function List({ticket, loading}) {
    if(loading) {
        return <Loader />
    }
        return ( <div className='ticket-list'>
                {ticket.map(ticket => (
                                   <ul key={ticket.segments[0].date + ticket.segments[1].date}>
                                   <li>
                                   <div className="item">
                                       <div className="ticket-desktop__content">
                                           <header className='ticket-desktop__header'>
                                                <div className="header__prise">
                                                    { ticket.price
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
                                                </div>
                                                <div className="header__logo">
                                                   <a href="/" className="header_logo-link">
                                                       <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt='S7' className="header__logo-pic"/>
                                                   </a>
                                               </div>
                                           </header>
                                           {ticket.segments.map(segment => ( 
                                              <div className="way" key={segment.date}>
                                                 <div className="route">
                                                    <div className="departure-1">{`${segment.origin} - ${segment.destination}`}</div>
                                                    <div className="departure-2">
                                                        {new Date(segment.date).getHours() + 
                                                            ":" + 
                                                        new Date(segment.date).getMinutes() +
                                                            " - " +
                                                            new Date(
                                                                new Date(segment.date).setHours(
                                                                new Date(segment.date).getHours() + Math.floor(segment.duration / 60)
                                                            )
                                                        ).getHours() +
                                                        ":" + 
                                                        new Date(
                                                            new Date(segment.date).setMinutes(new Date(segment.date).getMinutes() + segment.duration)
                                                        ).getMinutes()
                                                        }</div>
                                                </div>
                                                <div className="length">
                                                    <div className="time-1">В ПУТИ</div>
                                                    <div className="time-2">{Math.ceil(segment.duration / 60) + ":" + (segment.duration % 60)}</div>
                                                </div>
                                                <div className="stops">
                                                        <div className="transfer-1">{segment.stops.length === 0 ? "Без пересадок" : segment.stops.length === 1 ? "1 пересадка" : segment.stops.length >=2 ? `${segment.stops.length} пересадки` : ""}</div>
                                                    <div className="transfer-2">{segment.stops.join(", ")}</div>
                                                </div>
                                                </div>
                                           ))}
                                       </div>
                                   </div>
                                   </li>
                               </ul>
                ))}
                </div>
    )
}

