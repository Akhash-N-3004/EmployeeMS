import React, { useState } from 'react';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    mobileNumber: '',
    address: '',
    emailId: '',
    joinDate: '',
    jobId: '',
    role: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform actions like submitting the form data to a server or updating the state
    console.log(formData);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="emailId">Email ID:</label>
        <input
          type="text"
          id="emailId"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
        />

        <label htmlFor="joinDate">Join Date:</label>
        <input
          type="text"
          id="joinDate"
          name="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
        />

        <label htmlFor="jobId">Job ID:</label>
        <input
          type="text"
          id="jobId"
          name="jobId"
          value={formData.jobId}
          onChange={handleChange}
        />

        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
