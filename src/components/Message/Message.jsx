import React from 'react';
import './Message.css';



export default function Message({ticket}) {
    console.log(ticket);

        return ( <div>
                    <div>
                        <p>Найдено {ticket} билетов!</p>
                    </div>
                </div>
                )
}