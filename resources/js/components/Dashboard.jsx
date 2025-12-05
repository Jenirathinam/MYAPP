import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

export default function Dashboard() {
  const [user, setUser] = useState(null);

const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(res => setUser(res.data))
    .catch(() =>navigate("/dashboard"));
  }, []);

  return (
    <Container style={{ padding: 30 }}>
      <h1>Dashboard</h1>
      {user && <h2>Welcome, {user.name}</h2>}
      <Button  onClick={()=>{navigate("/basic-details")}}>Basic Details</Button>
        <Button  onClick={()=>{navigate("/address")}}>Address</Button>
          <Button  onClick={()=>{navigate("/doc-details")}}>Document Details</Button>
    </Container>
  );
}
