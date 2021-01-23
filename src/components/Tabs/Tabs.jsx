import React from 'react';
import { useDispatch } from 'react-redux';
import { sortCheapTicket, sortFastTicket } from '../../action';
import './Tabs.css';



export default function Tabs({ticket}) {
    const dispatch = useDispatch();
    const elem = document.querySelector('.tabs__fast');
    const elem2 = document.querySelector('.tabs__cheap');
    const sortCheap = () => {
        dispatch(sortCheapTicket(ticket))
        elem.classList.remove('active')
        elem2.style.background = '#2196f3';
        elem2.style.color = '#ffffff';
    }
    const sortFast = () => {
        dispatch(sortFastTicket(ticket))
        elem.classList.add('active')
        if(elem.classList.contains('active')){
            elem2.style.background = 'white';
            elem2.style.color = '#4a4a4a';
        }
    }


        return ( <div>
                    <div className="tabs">
                        <div className="tabs__cheap" onClick={sortCheap}>САМЫЙ ДЕШЕВЫЙ</div>
                        <div className="tabs__fast" onClick={sortFast}>САМЫЙ БЫСТРЫЙ</div>
                    </div>
                </div>
                )
}