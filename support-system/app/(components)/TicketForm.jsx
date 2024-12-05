"use client";
import React, { useState } from "react";

const TicketForm = () => {
  const ticketStatingData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not Started",
    category: "Internet Problems",
  };
  const [formData, setFormData] = useState(ticketStatingData);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>

        <label htmlFor="">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label htmlFor="">Description:</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows="5"
        />

        <label htmlFor="">:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label htmlFor="">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required
          value={formData.title}
        />
      </form>
    </div>
  );
};

export default TicketForm;
