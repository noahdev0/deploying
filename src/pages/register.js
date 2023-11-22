import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  //make a pop up window to show the user that he is registered
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = "Phone is invalid";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        setSending(true);
        await axios.post("/api/addUser", {
          name,
          lastName,
          email,
          address,
          phone,
        });
        console.log("success");
        setName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setPhone("");
      } catch (error) {
        if ((error = "Email already exists")) {
          alert("Email already exists");
          return;
        }
        alert("Something went wrong");
        // Handle error here
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="option">Option</label>
          <div>
            <label>
              <input
                type="radio"
                name="option"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Option 2
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Option 3
            </label>
          </div>
        </div>

        {/* Show different input based on selected option */}
        {selectedOption === "option1" && (
          <div className="form-group">
            <label htmlFor="input1">Input 1</label>
            <input
              type="text"
              name="input1"
              className="form-control"
              onChange={(event) => setInput1(event.target.value)}
            />
          </div>
        )}
        {selectedOption === "option2" && (
          <div className="form-group">
            <label htmlFor="input2">Input 2</label>
            <input
              type="text"
              name="input2"
              className="form-control"
              onChange={(event) => setInput2(event.target.value)}
            />
          </div>
        )}
        {selectedOption === "option3" && (
          <div className="form-group">
            <label htmlFor="input3">Input 3</label>
            <input
              type="text"
              name="input3"
              className="form-control"
              onChange={(event) => setInput3(event.target.value)}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
