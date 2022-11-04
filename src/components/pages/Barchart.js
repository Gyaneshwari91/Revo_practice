import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const Barchart = (props) => {
  function datetime(st) {
    var dt = new Date(Number(st));
    console.log(dt.getHours());
    // return dt.toLocaleTimeString();
    return dt.getHours();
    // let d=new Date().getTime();
    // console.log("Current time=",d);
    // let dt=new Date(d);
    // console.log("Current Date",dt);
    // // return dt.toLocaleTimeString();
  };
  // const [chart, setChart] = useState({chart:[]});
  const [data, setData] = useState({ count: 0, data: [] });
  var lab = [];
  async function fetchData() {
    let response = await axios(`http://172.104.207.9:8000/device/type/aa01/24`);
    if (data.count !== response.data.count) {
      setData(response.data);
      //   console.log("response data");
      //   console.log(response.data);
      // setChart(response.data);
    }
    // console.log(data);
    return response.data;
  }
  

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  if (!data) return null;
  console.log(data);
  var dtsarr = data.data.map((x) => x.dts);
  if (props.val==="vt1"){
    var valdata= data.data.map((y)=> y.vt1);}
  else if (props.val==="vt2") {
    var valdata= data.data.map((y)=> y.vt2);
  } 
  else if(props.val==="cap") {
    var valdata= data.data.map((y)=> y.cap);
  }
  else if(props.val==="trm") {
    var valdata= data.data.map((y)=> y.trm);
  }

  
  console.log(dtsarr);
  for (var i = 0; i < dtsarr.length; i++) {
    // console.log(Number(dtsarr[i]));
    // console.log(datetime(1116734880000));
    // console.log(datetime("958968480900"));
    lab.push(datetime(dtsarr[i]));
  }
  // // datetime(958968480909);
  // // datetime(1667149793187);
  // console.log(dtsarr);
  // console.log(lab);
  // setChart(lab);
  if (lab) {
    return <Bar
      data={{
        // Name of the variables on x-axies for each bar
        labels: [...lab],
        datasets: [
          {
            // Label for bars
            label: "counts",
            // Data or value of your each variable
            data: [...valdata],
            // Color of each bar
            backgroundColor: ["rgba(116, 223, 238, 1)"],
            // Border color of each bar
            borderColor: ["rgba(116, 223, 238, 1)"],
            borderWidth: 0.5,
          },
        ],
      }}
      // Height of graph
      height={400}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                // The y-axis value will start from zero
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 15,
          },
        },
      }}
      className="Bargraph_pos"
    />
  };

  // return <Bar data={dtsarr} labels={lab}/>
  // alert(lab)
  //   Need to have data time to have a bar graph as in figma file
}
