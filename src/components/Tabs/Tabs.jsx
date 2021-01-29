import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { sortCheapTicket, sortFastTicket } from "../../action";
import "./Tabs.css";

export default function Tabs({ ticket }) {
  const dispatch = useDispatch();
  const divRefOne = useRef();
  const divRefTwo = useRef();

  const sortCheap = useCallback(() => {
    divRefOne.current.classList.add("active");
    divRefTwo.current.classList.remove("active");
    dispatch(sortCheapTicket(ticket));
  }, [ticket, dispatch]);

  const sortFast = useCallback(() => {
    divRefTwo.current.classList.add("active");
    divRefOne.current.classList.remove("active");
    dispatch(sortFastTicket(ticket));
  }, [ticket, dispatch]);

  return (
    <div>
      <div className="tabs">
        <div ref={divRefOne} className="tabs__cheap active" onClick={sortCheap}>
          САМЫЙ ДЕШЕВЫЙ
        </div>
        <div ref={divRefTwo} className="tabs__fast" onClick={sortFast}>
          САМЫЙ БЫСТРЫЙ
        </div>
      </div>
    </div>
  );
}
