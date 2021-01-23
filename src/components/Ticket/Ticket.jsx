import React from 'react';
import './Ticket.css';
import List from './List/List';



export default function Ticket({ticket, loading}) {
        return ( <div>
                    <List ticket={ticket} loading={loading}/>
                </div>
         )
}