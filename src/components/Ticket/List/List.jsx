import React from 'react';
import { ticketNormalize } from '../../../utils/helper';
import { Loader } from '../../Loader/Loader';
import './List.css';

export default function List({ticket, loading}) {
    if(loading) {
        return <Loader />
    }
    ticket = ticketNormalize(ticket).slice(0, 5);
        return ( <div className='ticket-list'>
                {ticket.map(({id, price, carrier, segments}) => (
                                   <ul key={id}>
                                   <li>
                                   <div className="item">
                                       <div className="ticket-desktop__content">
                                           <header className='ticket-desktop__header'>
                                                <div className="header__prise">
                                                    { price }
                                                </div>
                                                <div className="header__logo">
                                                   <a href="/" className="header_logo-link">
                                                       <img src={carrier} alt='' className="header__logo-pic"/>
                                                   </a>
                                               </div>
                                           </header>
                                           {segments.map(({id, out, outTime, timeInTrack, stops, stopsC}) => ( 
                                              <div className="way" key={id}>
                                                 <div className="route">
                                                    <div className="departure-1">{out}</div>
                                                    <div className="departure-2">
                                                        {outTime}</div>
                                                </div>
                                                <div className="length">
                                                    <div className="time-1">В ПУТИ</div>
                                                    <div className="time-2">{timeInTrack}</div>
                                                </div>
                                                <div className="stops">
                                                        <div className="transfer-1">{stops}</div>
                                                    <div className="transfer-2">{stopsC}</div>
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

