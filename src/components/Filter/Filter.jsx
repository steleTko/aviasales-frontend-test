import React, { useState } from 'react';
import './Filter.css'
import './img/Shape.svg'
import './img/Cursor.svg'
import { useDispatch } from 'react-redux';
import { filterTickets, resetTicketsState } from '../../action';

export default function Filter({ticket}) {
    const dispatch = useDispatch();
    const [filTick] = useState({
        all: true,
        without: false,
        one: false,
        two: false,
        three: false
    })
    const filterHandler = (fil) => {
        filTick[fil] = !filTick[fil];
        dispatch(filterTickets(ticket, filTick))
        if(!filTick[fil] && filTick['all']) {
            dispatch(resetTicketsState(ticket))
        }
    }

        // if(filTick['all'] === false) {
        //     console.log('Все значения лож')
        //  }
        //  else { 
        //      dispatch(resetTicketsState(ticket))
        //  }
    

    return (<div>
            <div className="filter">
                <div className="filter__text">Количество пересадок</div>
                <div className="filter__input">
                    <input type='checkbox' 
                        id="checkbox-id1" 
                        className="checkbox" 
                        defaultChecked={filTick.all}
                        onClick={() => filterHandler('all')}/>
                    <label htmlFor="checkbox-id1" >Все</label>

                    <input 
                        type='checkbox' 
                        id="checkbox-id2" 
                        className="checkbox" 
                        defaultChecked={filTick.without}
                        onClick={() => filterHandler('without')}/>
                    <label htmlFor="checkbox-id2" >Без пересадок</label>

                    <input 
                        type='checkbox' 
                        id="checkbox-id3" 
                        className="checkbox" 
                        defaultChecked={filTick.one}
                        onClick={() => filterHandler('one')}
                    /> 
                    <label htmlFor="checkbox-id3">1 пересадка</label>

                    <input 
                        type='checkbox' 
                        id="checkbox-id4" 
                        className="checkbox" 
                        defaultChecked={filTick.two}
                        onClick={() => filterHandler('two')}
                    />
                    <label htmlFor="checkbox-id4" > 2 пересадки</label>
                    
                    <input 
                        type='checkbox' 
                        id="checkbox-id5" 
                        className="checkbox" 
                        defaultChecked={filTick.three}
                        onClick={() => filterHandler('three')}
                    />
                    <label htmlFor="checkbox-id5" >3 пересадки</label>
            </div>
            </div>
            </div>
    )
}