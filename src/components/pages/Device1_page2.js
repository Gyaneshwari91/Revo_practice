import React from "react";
import './Device1page2.css'
import CurrentLineChart from "./CurrentLineChart";
import { Barchart } from "./Barchart";
import Dropdown_D1_p2 from "./Dropdown_D1_p2";
export function Device1page2() {
    return (
        <div>
            <a href="/"> <h2 className="BackIcon"> &lt; </h2> </a>
            <div className="Device1">Device 1</div>
            {/* <div className="allcharts">
                <div className="CurrentLineChart">
                    <h1 className="CurrentLabel" >Current</h1>
                    <CurrentLineChart val="crt" />
                </div>
                <div className="Barchart">
                <h1 className="CurrentLabel" >Voltage 1</h1>
                    <Barchart val={"vt1"} />
                </div>
                <div className="Barchart">
                <h1 className="CurrentLabel" >Voltage 2</h1>
                    <Barchart val={"vt2"} />
                </div>
                <div className="Barchart">
                <h1 className="CurrentLabel" >Capacity</h1>
                    <Barchart val={"cap"} />
                </div>
                <div className="Barchart">
                <h1 className="CurrentLabel" >Power</h1>
                    <Barchart val={"trm"} />
                </div>
                <div className="CurrentLineChart">
                    <h1 className="CurrentLabel" >Temperature 1</h1>
                    <CurrentLineChart val="tp1" />
                </div>
                <div className="CurrentLineChart">
                    <h1 className="CurrentLabel" >Temperature 2</h1>
                    <CurrentLineChart val="tp2" />
                </div>
                <div className="CurrentLineChart">
                    <h1 className="CurrentLabel" >SOC</h1>
                    <CurrentLineChart val="soc" />
                </div>
            </div> */}
            <Dropdown_D1_p2/>
        </div>
    );

}