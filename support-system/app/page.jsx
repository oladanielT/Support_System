import React from "react";
import TicketCard from "./(components)/ticketcard";

const page = () => {
  return (
    <div className="lg:grid grid-cols-2 xl:grid-cols-4">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default page;
