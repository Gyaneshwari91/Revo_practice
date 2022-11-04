import React from "react";
import CurrentLineChart from "./CurrentLineChart";

export function Allcharts(){
    return (<div className="allcharts">
            <div className="CurrentLineChart">
                <h1 className="CurrentLabel" >Current</h1>
                <CurrentLineChart val="crt" />
            </div>
            <div className="CurrentLineChart">
            <h1 className="CurrentLabel" >Voltage 1</h1>
                <CurrentLineChart val={"vt1"} />
            </div>
            <div className="CurrentLineChart">
            <h1 className="CurrentLabel" >Voltage 2</h1>
                <CurrentLineChart val={"vt2"} />
            </div>
            <div className="CurrentLineChart">
            <h1 className="CurrentLabel" >Capacity</h1>
                <CurrentLineChart val={"cap"} />
            </div>
            <div className="CurrentLineChart">
            <h1 className="CurrentLabel" >Power</h1>
                <CurrentLineChart val={"trm"} />
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
        </div>)
};
