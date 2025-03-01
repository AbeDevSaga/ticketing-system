import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await axios.get("/api/tickets");
      setTickets(res.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Your Tickets</h1>
      {tickets.map((ticket) => (
        <div key={ticket._id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;