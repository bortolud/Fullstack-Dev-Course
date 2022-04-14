import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleContactChange = (event) => {
    setContact(event.target.value);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={handleTitleChange} />
      <ContactPicker contacts={contacts} onChange={handleContactChange} />
      <input type='date' value={date} onChange={handleDateChange} min={getTodayString} />
      <input type='time' value={time} onChange={handleTimeChange} />
      <input type='submit' value='Submit' />
    </form>
  );
};
