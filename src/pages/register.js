import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import { Style } from "@/utils/styles";

export default function Register() {
  //make a pop up window to show the user that he is registered
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!phone) {
      errors.phone = "Phone is required";
    } else if (!/^\+?\d{10,}$/.test(phone)) {
      errors.phone = "Phone is invalid";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    if (validateForm()) {
      try {
        setSending(true);
        await axios.post("/api/addUser", {
          name,
          lastName,
          title,
          email,
          address,
          phone,
          message,
          selectedOption,
        });
        console.log("success");
      } catch (error) {
        console.error(error.response.data.error);

        if (error && error.response.data.error === "Email limit exceeded") {
          alert("Email limit exceededs");
          return;
        }
        if (error && error.response.data.error === "Phone limit exceeded") {
          alert("Phone limit exceeded");
          return;
        }

        alert(`the error is :${error}`);
      } finally {
        setSending(false);
      }
    }
  };

  useEffect(() => {
    if (!sending) {
      setName("");
      setLastName("");
      setTitle("");
      setEmail("");
      setAddress("");
      setPhone("");
      setSelectedOption("option1");
      setMessage("");
    }
  }, [sending]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-full min-h-screen  bg-gray-700 overflow-x-hidden">
      <motion.h1
        className="text-4xl text-center text-white font-bold mb-20"
        initial={{ opacity: 0, y: -20, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        drag
        dragConstraints={{ left: 10, right: 10, top: 20, bottom: 20 }}
        transition={{ duration: 0.5 }}>
        Register
      </motion.h1>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="form-group">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="name" className={Style.lable}>
                First name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className={Style.input}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="lastName" className={Style.lable}>
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className={`${Style.input} ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className={Style.lable}>
            Title
          </label>
          <input
            type="text"
            name="title"
            className={`${Style.input} ${errors.title ? "is-invalid" : ""}`}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className={Style.lable}>
            Email
          </label>
          <input
            type="text"
            name="email"
            className={`${Style.input} ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address" className={Style.lable}>
            Address
          </label>
          <input
            type="text"
            name="address"
            className={`${Style.input} ${errors.address ? "is-invalid" : ""}`}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone" className={Style.lable}>
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className={`${Style.input} ${errors.phone ? "is-invalid" : ""}`}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="option" className={Style.lable}>
            Option
          </label>
          <div>
            <label className={Style.lable}>
              <input
                type="radio"
                name="option"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Option 1
            </label>
            <label className={Style.lable}>
              <input
                type="radio"
                name="option"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Option 2
            </label>
          </div>
        </div>

        {/* Show different input based on selected option */}
        {selectedOption === "option1" && (
          <div className="form-group">
            <label htmlFor="input1" className={Style.lable}>
              Input 1
            </label>
            <input
              type="text"
              name="input1"
              className={`block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        )}
        {selectedOption === "option2" && (
          <div className="form-group">
            <label htmlFor="input2" className={Style.lable}>
              Input 2
            </label>
            <input
              type="text"
              name="input2"
              value={message}
              className={`block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        )}

        <motion.div
          className="d-flex w-full align-middle justify-between my-5 "
          style={{ overflow: "hidden", position: "relative", bottom: "2vh" }}>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? "Sending..." : "Submit"}
          </button>
          <Link href="/" className="btn btn-secondary ml-2">
            Home
          </Link>
        </motion.div>
      </form>
    </div>
  );
}
