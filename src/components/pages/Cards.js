import React from "react";
import axios from "axios";
import "./Home.css";
import Card from "./card";
import { useEffect, useState } from "react";

export default function Cards() {
  const [data, setData] = useState({ count: 0, data: [] });

  async function fetchData() {
    let response = await axios(`http://172.104.207.9:8000/device/type/aa01/1`);
    if (data.count !== response.data.count) {
      setData(response.data);
    }
    return response.data;
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every 5 seconds!");
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <>
      <div className="cards">
        
      </div>
    </>
  );
}
