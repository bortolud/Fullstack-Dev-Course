import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleNameChange} value={name}/>
      <input type='tel' onChange={handlePhoneChange} value={phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
      <input type='email' onChange={handleEmailChange} value={email}/>
      <input type='submit' value='Submit' />

    </form>
    // <form onSubmit={handleSubmit}>
    //   <input type='text' onChange={handleNameChange} value={name} />
    //   <input type='submit'>Submit</input>
    // </form>
  );
};
