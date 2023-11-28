import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Style } from "@/utils/styles";

import axios from "axios";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("agence");
  const [company, setCompany] = useState("");
  const [target, setTarget] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    const errors = {};
    //the name cannot have numbers
    if (!/^[a-zA-Z]+$/.test(name)) {
      errors.name = "Name is invalid";
    }
    //the last name cannot have numbers
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      errors.lastName = "Last name is invalid";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!/^0\d{9}$/.test(phone)) {
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
          title,
          email,
          address,
          phone,
          message,
          target,
          status,
          company,
        });
        console.log("success");

        // Use popup component to show success message
      } catch (error) {
        // Use popup component to show generic error message
        // <Popup message={`The error is: ${error}`} />;
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
      setTarget("");
      setMessage("");
      setCompany("");
      setStatus("agence");
    }
  }, [sending]);

  const handleTarget = (event) => {
    setTarget(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="w-full min-h-screen bg-gray-700 overflow-x-hidden">
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
                <i className="fa fa-asterisk text-danger ml-1"></i>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className={`${Style.input} ${errors.name ? "is-invalid" : ""}`}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="lastName" className={Style.lable}>
                Last Name
                <i className="fa fa-asterisk text-danger ml-1"></i>
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
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className={Style.lable}>
            Job Title
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
            <i className="fa fa-asterisk text-danger ml-1"></i>
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
            <i className="fa fa-asterisk text-danger ml-1"></i>
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
        <div className="form-group flex flex-row ">
          <label htmlFor="option" className={Style.lable}>
            Vous êtes:
          </label>
          <div className="flex flex-row">
            <label className={Style.lable}>
              <input
                type="radio"
                name="option"
                value="agence"
                checked={status === "agence"}
                onChange={handleStatus}
              />
              Agence
            </label>
            <label className={Style.lable}>
              <input
                type="radio"
                name="option"
                value="société"
                checked={status === "société"}
                onChange={handleStatus}
              />
              Société
            </label>
            <label className={Style.lable}>
              <input
                type="radio"
                name="option"
                value="bureau d'étude"
                checked={status === "bureau d'étude"}
                onChange={handleStatus}
              />
              Bureau d'étude
            </label>
            <label className={Style.lable}>
              <input
                type="radio"
                name="option"
                value="etudiant"
                checked={status === "etudiant"}
                onChange={handleStatus}
              />
              Etudiant
            </label>
          </div>
        </div>

        {/* Show different input based on selected option */}
        {["agence", "bureau d'étude", "société"].includes(status) && (
          <div className="form-group">
            <label htmlFor="company" className={Style.lable}>
              The Name OF the {status}
            </label>
            <input
              type="text"
              name="company"
              className={Style.input}
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="content_type" className="">
            Vous êtes intéressé par:
          </label>
          <label className={Style.lable}>
            <input
              type="radio"
              name="content_type"
              className={Style.input}
              value="La numérisation & l'automatisation"
              checked={target === "La numérisation & l'automatisation"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            La numérisation & l'automatisation
          </label>
          <label className={Style.lable}>
            <input
              type="radio"
              name="content_type"
              className={Style.input}
              value="Le cryptage & la sécurité des données"
              checked={target === "Le cryptage & la sécurité des données"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            Le cryptage & la sécurité des données
          </label>
          <label className={Style.lable}>
            <input
              type="radio"
              name="content_type"
              className={Style.input}
              value="La version Premium de RPA Plug-in"
              checked={target === "La version Premium de RPA Plug-in"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            La version Premium de RPA Plug-in
          </label>
          <label className={Style.lable}>
            <input
              type="radio"
              name="content_type"
              className={Style.input}
              value="La version Cloud de RPA Plug-in"
              checked={target === "La version Cloud de RPA Plug-in"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            La version Cloud de RPA Plug-in
          </label>
        </div>

        <div className="form-group">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Message :
          </label>
          <textarea
            rows="5"
            name="message"
            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <motion.div
          className="d-flex w-full align-middle justify-between my-5 "
          style={{ overflow: "hidden", position: "relative", bottom: "2vh" }}>
          <motion.button
            type="submit"
            className="btn btn-primary"
            disabled={sending}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: sending ? 0.5 : 1 }}>
            {sending ? "Sending..." : "Submit"}
          </motion.button>
          <Link href="/" className="btn btn-secondary ml-2">
            Home
          </Link>
        </motion.div>
      </form>
    </div>
  );
}
