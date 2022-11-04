import React, { useState } from 'react'
import CurrentLineChart from './CurrentLineChart';
import { Allcharts } from './allcharts';
import "./Device1page2.css";
function Dropdown_D1_p2() {
    const [state, setstate] = useState(false);
    const [show, setshow] = useState("t1");
    const show_dropdown = () => {
        setstate(true);
    };
    const hide_dropdown = () => {
        setstate(false);
    };
    switch (show) {
        case "crt":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Current</h1>
                <CurrentLineChart val="crt" />
            </div>

        case "v1":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Voltage 1</h1>
                <CurrentLineChart val={"vt1"} />
            </div>

        case "v2":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Voltage 2</h1>
                <CurrentLineChart val={"vt2"} />
            </div>

        case "t1":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Temperature 1</h1>
                <CurrentLineChart val={"tp1"} />
            </div>

        case "t2":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Temperature 2</h1>
                <CurrentLineChart val={"tp2"} />
            </div>

        case "cap":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Capacity</h1>
                <CurrentLineChart val={"cap"} />
            </div>

        case "pow":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Power</h1>
                <CurrentLineChart val={"trm"} />
            </div>

        case "soc":
             return <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >SOC</h1>
                <CurrentLineChart val={"soc"} />
            </div>

        case "all":
             <Allcharts/>
    };

return  (
    
    <div style={{ color: 'white' }} onMouseEnter={show_dropdown} onMouseLeave={hide_dropdown} >
        Charts
        <div onMouseEnter={show_dropdown} onMouseLeave={hide_dropdown} >
            {state ? (<ul className='chartlists'>
                <li>Current</li>
                <li>Voltage 1</li>
                <li>Voltage 2</li>
                <li>Capacity</li>
                <li>Power</li>
                <li>Temperature 1</li>
                <li>Temperature 2</li>
                <li>SOC</li>
                <li><button>ALL</button></li>
            </ul>)
                : null}

        </div>
    </div>
    
);
};
export default Dropdown_D1_p2