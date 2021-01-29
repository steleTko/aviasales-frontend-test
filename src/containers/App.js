import React, { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import "../index.css";
import Logo from "../components/Logo/Logo";
import Tabs from "../components/Tabs/Tabs";
import Ticket from "../components/Ticket/Ticket";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../action";

function App() {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.tickets.tickets);
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const loading = useSelector((state) => state.app.loading);

  return (
    <div className="wrapper">
      <Logo />
      <div className="transform">
        <Filter ticket={ticket} />
        <div>
          <Tabs ticket={ticket} />
          <Ticket ticket={ticket} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
