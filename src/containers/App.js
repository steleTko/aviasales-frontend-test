import React, { useCallback, useEffect, useRef, useState } from "react";
import Filter from "../components/Filter/Filter";
import "../index.css";
import Logo from "../components/Logo/Logo";
import Tabs from "../components/Tabs/Tabs";
import Ticket from "../components/Ticket/Ticket";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets, filterTickets, resetTicketsState } from "../action";
import { Context } from "../utils/context";

function App() {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.tickets.tickets);
  const [filTick] = useState({
    all: true,
    without: false,
    one: false,
    two: false,
    three: false,
  });
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  const divRef = useRef();

  const filterHandler = useCallback(
    (fil) => {
      filTick[fil] = !filTick[fil];
      if (
        filTick["without"] ||
        filTick["one"] ||
        filTick["two"] ||
        filTick["three"]
      ) {
        dispatch(filterTickets(ticket, filTick));
      }
      if (!filTick[fil] && filTick["all"]) {
        dispatch(resetTicketsState(ticket));
      }
      if (Object.keys(filTick).every((key) => !filTick[key])) {
        divRef.current.style.visibility = "hidden";
        dispatch(resetTicketsState(ticket));
      } else {
        divRef.current.style.visibility = "visible";
      }
    },
    [ticket, dispatch, filTick]
  );

  const loading = useSelector((state) => state.app.loading);

  return (
    <Context.Provider value={{ filTick, filterHandler }}>
      <div className="wrapper">
        <Logo />
        <div className="transform">
          <Filter ticket={ticket} />
          <div>
            <Tabs ticket={ticket} />
            <div ref={divRef}>
              <Ticket ticket={ticket} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
