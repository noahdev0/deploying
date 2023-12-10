import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import axios from "axios";
import Link from "next/link";
import Faq from "@/components/Faq";
import { faqArray } from "@/utils";
import AlertComponent from "@/components/AlertComponent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RadioGroup from "@/components/form/RadioGroup";

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
  const [res, setRes] = useState("");
  const [alert, setAlert] = useState(false);
  const [state, setState] = useState(true);
  const options = [
    { label: "Agence", value: "agence" },
    { label: "Société", value: "société" },
    { label: "Bureau d'étude", value: "bureau d'étude" },
    { label: "Etudiant", value: "etudiant" },
  ];

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
        setRes("Form has been submitted successfully ");
        setState(true);

        // throw new Error();

        // Use popup component to show success message
      } catch (error) {
        setState(false);
        setRes(error.response.data.error);
      } finally {
        setSending(false);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
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

  const handleTarget = ({ target }) => {
    setTarget(target.value);
  };

  const handleStatus = ({ target }) => {
    setStatus(target.value);
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
        className="container mx-auto px-4  max-w-6xl">
        <div className="form-group m-3">
          <div className="grid grid-cols-1  sm:gap-5 sm:grid-cols-2">
            <div>
              <TextField
                id="name"
                label="Name"
                type="name"
                variant="filled"
                sx={{ width: "100%", margin: "0.5rem" }}
                value={name}
                onChange={({ target }) => setName(target.value)}
                required
                error={errors.name}
                texthelper={errors.name}
              />
            </div>
            <div>
              <TextField
                id="lastName"
                label=" Last Name"
                type="lastName"
                variant="filled"
                name="lastName"
                inputProps={{ maxLength: 15 }} // Add this line to set the maximum input character limit
                sx={{ width: "100%", margin: "0.5rem" }}
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
                required
                error={errors.lastName}
                texthelper={errors.lastName}
              />
            </div>
          </div>
        </div>
        <div className="form-group m-3">
          <TextField
            id="filled-multiline-flexible"
            label="Title"
            name="title"
            variant="filled"
            multiline
            maxRows={0}
            inputProps={{ maxLength: 20 }}
            sx={{ width: "100%", margin: "0.5rem" }}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            error={errors.title}
            texthelper={errors.title}
          />
        </div>

        <div className="form-group m-3 relative">
          <TextField
            id="filled-multiline-flexible"
            label="Email"
            type="mail"
            name="email"
            variant="filled"
            inputProps={{ maxLength: 25 }}
            sx={{ width: "100%", margin: "0.5rem" }}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
            error={errors.email}
            texthelper={errors.email}
          />
        </div>
        <div className="form-group m-3 relative">
          <TextField
            id="adress"
            label="Address"
            type="text"
            variant="filled"
            name="address"
            multiline
            maxRows={0}
            inputProps={{ maxLength: 25 }}
            sx={{ width: "100%", margin: "0.5rem" }}
            value={address}
            onChange={({ target }) => setAddress(target.value)}
            required
            error={errors.address}
            texthelper={errors.address}
          />
        </div>
        <div className="form-group m-3 relative">
          <TextField
            id="phone"
            label="Phone Number"
            type="phone"
            variant="filled"
            name="phone"
            inputProps={{ maxLength: 25 }}
            sx={{ width: "100%", margin: "0.5rem" }}
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
            error={errors.phone}
            texthelper={errors.phone}
          />
        </div>

        <div className="form-group m-3">
          <RadioGroup
            label={"Vous êtes:"}
            name="status"
            value={status}
            onChange={handleStatus}
            options={options}
            selectedValue={status}
          />
        </div>

        {/* Show different input based on selected option */}
        {["agence", "bureau d'étude", "société"].includes(status) && (
          <div className="form-group m-3">
            <label htmlFor="company" className="block">
              The Name OF the {status}
            </label>
            <input
              id="company"
              type="text"
              name="company"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>
        )}

        <div className="form-group m-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vous êtes intéressé par:
          </label>
          <label className="block">
            <input
              type="radio"
              name="content_type"
              className=" mx-3"
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
              className=" mx-3"
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
              className=" mx-3"
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
              className=" mx-3"
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
            id="message"
            rows="5"
            name="message"
            className={`block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="flex w-full items-center justify-between my-5 ">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ backgroundColor: "blue" }}>
            {sending ? "Sending..." : "Submit"}
          </Button>
          <Button variant="outlined" color="primary" href={"/"}>
            Home
          </Button>
        </div>
      </form>

      <Faq />

      {/* <Faq question={"hello"} answer={"my answer"} /> */}
      <AlertComponent state={state} active={alert} res={res} />
    </div>
  );
}
