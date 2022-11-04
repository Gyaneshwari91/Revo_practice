import React from "react";
import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import { NewCard } from "./newcard";
import ToggleCard from "./togglecard";
import {Device1page2} from "./Device1_page2";

export default function Home() {
  const [data, setData] = useState({ count: 0, data: [] });

  const smallTitles = ["UV", "OV", "OCC", "OCD"];

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
  console.log("here is the data")
  console.log(data.data)
  return (
    <>
      <div className="allDevice">
        <div className="exiDecice">
          <button className="selected homeBtn">Device 1</button>
          <button className="homeBtn">Device 2</button>
          <button className="homeBtn">Device 3</button>
        </div>
        <div className="ad=dDevice">
          <button className="add homeBtn">+ Add Device</button>
        </div>
      </div>

      <div className="cards">
        
        {data.data.map((element, index) => {
              return (
              <div>
                <NewCard {...element} key={index} />
              </div>
                );
            })}
      </div>
      <div className="togglecard">
          {smallTitles.map((element1, index) => {
            return (
              <div key={index} >
                {data.data.map((element, index) => {
                  return <ToggleCard key={index} data={element} alt={element1} className="togglecard"/>;
                })}
          </div>
          );
        })}
      </div>
      <a href="/ShowMore" className="Show_more" ><u>Show more</u></a>
      
            
    </>
  );
}
