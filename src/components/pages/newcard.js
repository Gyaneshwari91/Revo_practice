import React from "react";
import "./Home.css"
import LineChart from "./linechart";
export function NewCard(props) {
    return (
        <div>
            <div className="allnewcard">
                <div className="newcard">
                    <h1 className="card_ele">Voltage1 : <span className="card_data">{props.vt1} V</span></h1>
                    <LineChart val="vt1" />
                </div> 
                <div className="newcard">
                    <h1 className="card_ele">Power : <span className="card_data">{props.trm} W</span></h1>
                    <LineChart val="trm" />
                </div> 
                <div className="newcard">
                    <h1 className="card_ele">Voltage2 : <span className="card_data">{props.vt2} V</span></h1> 
                    <LineChart val="vt2" /> 
                </div> 
                <div className="newcard">
                    <h1 className="card_ele">Temperature1 : <span className="card_data">{props.tp1} <sup>o</sup>C</span></h1>
                    <LineChart val="tp1" />
                </div> 
                <div className="newcard">
                    <h1 className="card_ele">Current : <span className="card_data">{props.crt} A</span></h1>
                    <LineChart val="crt" />
                </div> 
                <div className="newcard">
                    <h1 className="card_ele">Temperature2 : <span className="card_data">{props.tp2} <sup>o</sup>C</span></h1>
                    <LineChart val="tp2" />
                </div> 
                <div className="newcard">
                    <h1 className="card_ele">Capacity : <span className="card_data">{props.cap} F</span></h1>
                    <LineChart val="cap" />
                </div> 
                <div className="newcard">
                    <h1 className="card_ele">SOC : <span className="card_data">{props.soc} </span></h1>
                    <LineChart val="soc" />
                </div>  
        
            </div>
        </div>
    )
}
