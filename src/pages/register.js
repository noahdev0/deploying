import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Style } from "@/utils/styles";

import axios from "axios";
import Link from "next/link";
import Faq from "@/components/Faq";

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
        const response = await axios.post("/api/addUser", {
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
        if ((response.success = true)) {
          alert("Votre message a été envoyé avec succès");
        } else {
          alert("Une erreur s'est produite, veuillez réessayer plus tard");
        }

        // Use popup component to show success message
      } catch (error) {
        console.error(error);
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
    <div className="w-full min-h-screen overflow-x-hidden">
      <motion.h1
        className="text-4xl text-center font-bold mb-20"
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
        <div className="form-group m-3 relative">
          <div className="grid grid-cols-1  sm:gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block">
                First name
                <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? "border-red-500" : ""
                }`}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="lastName" className="block">
                Last Name
                <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              {errors.lastName && (
                <div className="text-red-500">{errors.lastName}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-group m-3">
          <label htmlFor="title" className="block">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
              errors.title ? "border-red-500" : ""
            }`}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="form-group m-3 relative">
          <label htmlFor="email" className="block">
            Email
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
              errors.email ? "border-red-500" : ""
            }`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div className="form-group m-3 relative">
          <label htmlFor="address" className="block">
            Address
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
              errors.address ? "border-red-500" : ""
            }`}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address}</div>
          )}
        </div>
        <div className="form-group m-3 relative">
          <label htmlFor="phone" className="block">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
              errors.phone ? "border-red-500" : ""
            }`}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          {errors.phone && <div className="text-red-500">{errors.phone}</div>}
        </div>
        <div className="form-group m-3 relative flex flex-col gap-2 ">
          <label htmlFor="option" className="block">
            Vous êtes:
          </label>
          <div className="flex gap-5">
            <label className="flex flex-col justify-center items-center">
              <input
                type="radio"
                name="option"
                value="agence"
                checked={status === "agence"}
                onChange={handleStatus}
              />
              Agence
            </label>
            <label className="flex flex-col justify-center items-center">
              <input
                type="radio"
                name="option"
                value="société"
                checked={status === "société"}
                onChange={handleStatus}
              />
              Société
            </label>
            <label className="flex flex-col justify-center items-center">
              <input
                type="radio"
                name="option"
                value="bureau d'étude"
                checked={status === "bureau d'étude"}
                onChange={handleStatus}
              />
               Bureau d'étude
            </label>
            <label className="flex flex-col justify-center items-center">
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
          <div className="form-group m-3">
            <label htmlFor="company" className="block">
              The Name OF the {status}
            </label>
            <input
              type="text"
              name="company"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>
        )}

        <div className="form-group m-3">
          <label
            htmlFor="content_type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vous êtes intéressé par:
          </label>
          <label className="block">
            <input
              type="radio"
              name="content_type"
              className="inline mx-2"
              value="La numérisation & l'automatisation"
              checked={target === "La numérisation & l'automatisation"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            La numérisation & l'automatisation
          </label>
          <label className="block">
            <input
              type="radio"
              name="content_type"
              className="inline mx-2"
              value="Le cryptage & la sécurité des données"
              checked={target === "Le cryptage & la sécurité des données"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            Le cryptage & la sécurité des données
          </label>
          <label className="block">
            <input
              type="radio"
              name="content_type"
              className="inline mx-2"
              value="La version Premium de RPA Plug-in"
              checked={target === "La version Premium de RPA Plug-in"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            La version Premium de RPA Plug-in
          </label>
          <label className="block">
            <input
              type="radio"
              name="content_type"
              className="inline mx-2"
              value="La version Cloud de RPA Plug-in"
              checked={target === "La version Cloud de RPA Plug-in"}
              onChange={handleTarget}
              required // Add the 'required' attribute
            />
            La version Cloud de RPA Plug-in
          </label>
        </div>

        <div className="form-group m-3">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Message :
          </label>
          <textarea
            rows="5"
            name="message"
            className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
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
      <Faq />
    </div>
  );
}
