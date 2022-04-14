import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select id='contacts' onChange={onChange}>
      <option value='none' key='none' selected="selected">None Selected</option>
      {contacts && contacts.map((contact,index) => {
        return (<option key={contact.name} value={contact.name}>{contact.name}</option>);
      })}
    </select>
  );
};
