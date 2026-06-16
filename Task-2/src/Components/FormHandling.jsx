import React, { useState } from 'react';

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    alert(
      `Name: ${formData.name}
Email: ${formData.email}
Password: ${formData.password}`
    );

    // Clear form after submit
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={changeHandler}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={changeHandler}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={changeHandler}
        />
        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>

      <hr />

      <h3>Live Preview</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
};

export default FormHandling;