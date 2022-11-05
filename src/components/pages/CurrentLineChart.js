import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LineChart.css";
import sampleValues from "E:/COLLEGE/IEEE/WEB dev/WebFrontend_P12.05.01.01/src/components/sampleValues.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const   CurrentLineChart = (props) => {
  const [chart, setChart] = useState({});

  const [data, setData] = useState({ count: 0, data: [] });

  var options = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.25,
      },
    },

    plugins: { legend: { display: false } },
    scales: {
      x: {
        display: false,
        reverse: true
      },

      y: {
        display: false,
      },
    },
    pointRadius:3,
    events: [],
  };



  async function fetchData() {
    let response = await axios(`http://172.104.207.9:8000/device/type/aa01/24`);
    

    if (data.count !== response.data.count) {
      setData(response.data);
      setChart(response.data);
    }
    // console.log("response data");
	  // console.log(response.data);
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
  
  var rec_crt;
  var dataa = {
    labels: chart?.data?.map((x) => ""),
    datasets: [
      {
        label: "",
        data: chart?.data?.map((x) => {
        if(props.val==="crt"){
            rec_crt=x.crt;
            return x.crt;   
        }
        else if (props.val==="tp1") {
          rec_crt=x.tp1;
          return x.tp1;
        }
        else if (props.val==="tp2") {
          rec_crt=x.tp2;
          return x.tp2;
        }
        else if (props.val==="soc") {
          rec_crt=x.soc;
          return x.soc;
        }
        }),
        borderColor: ["rgba(116, 223, 238, 1)", "rgba(209, 134, 244, 1)"],
      },
    ],
  };

  console.log(`Data recieved: ${dataa}`);
  return (
    <div style={{display:"block", margin:"2px"}} className="linechart_div">
		  
			<Line data={dataa} height={400} options={options} className="crt_line_graph" />
      {/* <div className="CurrentValue">{rec_crt} A</div> */}
		  
      
	</div>
  );
};

export default CurrentLineChart;