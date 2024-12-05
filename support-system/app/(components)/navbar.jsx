import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-nav text-default-text">
      <div className="text-3xl font-bold">
        <Link href="/">INTECU</Link>
      </div>
      <div>
        <ul className="flex gap-10">
          <Link href="#">Create Ticket</Link>
          <Link href="#">View Tickets</Link>
        </ul>
      </div>
      <div>
        <p>dg127@gmail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
