import React, { useState } from "react";
import axios from "axios";

const ReqPage = () => {
  const [token, setToken] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleRequest = async () => {
    try {
      const response = await axios.get("/api/login", {
        headers: {
          Authorization: `${token}`,
        },
      });
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={token} onChange={handleTokenChange} />
      <button onClick={handleRequest}>Make Request</button>
      <div>{responseData}</div>
    </div>
  );
};

export default ReqPage;
