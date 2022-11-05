import React, { useState } from 'react'
import CurrentLineChart from './CurrentLineChart';
import "./Device1page2.css";
function Dropdown_D1_p2() {
    const [state, setstate] = useState(false);
    const [checked_arr, setchecked_arr] = useState({
        crt: false, vt1: false, vt2: false, cap: false, pow: false, tp1: false, tp2: false, soc: false
    });
    const show_dropdown = () => {
        setstate(true);
    };
    const hide_dropdown = () => {
        setstate(false);
    };
    const handlechange = (e) => {
        // const value = e.target.value;
        // const checked = e.target.checked;
        // if (checked) {
        //     setchecked_arr([...checked_arr, value]);
        // }
        // else {
        //     setchecked_arr(checked_arr.filter((e) => (e !== value)));
        // }
        setchecked_arr({ ...checked_arr, [e.target.name]: e.target.checked })
        console.log(checked_arr);
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(checked_arr);
        //     for (let i = 0; i < checked_arr.length; i++) {
        //         switch (checked_arr[i]) {
        //             case "Current":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >Current</h1>
        //                     <CurrentLineChart val="crt" />
        //                 </div>
        //                 break;

        //             case "Voltage 1":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >Voltage 1</h1>
        //                     <CurrentLineChart val={"vt1"} />
        //                 </div>
        //                 break;

        //             case "Voltage 2":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >Voltage 2</h1>
        //                     <CurrentLineChart val={"vt2"} />
        //                 </div>
        //                 break;

        //             case "Temperature 1":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >Temperature 1</h1>
        //                     <CurrentLineChart val={"tp1"} />
        //                 </div>
        //                 break;

        //             case "Temperature 2":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >Temperature 2</h1>
        //                     <CurrentLineChart val={"tp2"} />
        //                 </div>
        //                 break;

        //             case "Capacity":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >Capacity</h1>
        //                     <CurrentLineChart val={"cap"} />
        //                 </div>
        //                 break;

        //             case "Power":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >Power</h1>
        //                     <CurrentLineChart val={"trm"} />
        //                 </div>
        //                 break;

        //             case "SOC":
        //                 return <div className="CurrentLineChart">
        //                     <h1 className="CurrentLabel" >SOC</h1>
        //                     <CurrentLineChart val={"soc"} />
        //                 </div>
        //                 break;
        //         };

        //     };
    };
    // console.log(checked_arr);


    return (
        <div>
            <div style={{ color: 'white' }} className="select_charts" >
            Charts
            <ul className='chartlists'>
                <form onSubmit={handlesubmit}>
                    <input type="checkbox" value="current" name="crt" onChange={handlechange} />Current
                    <br />
                    <input type="checkbox" value="Voltage 1" name="vt1" onChange={handlechange} />Voltage 1
                    <br />
                    <input type="checkbox" value="Voltage 2" name="vt2" onChange={handlechange} />Voltage 2
                    <br />
                    <input type="checkbox" value="Capacity" name="cap" onChange={handlechange} />Capacity
                    <br />
                    <input type="checkbox" value="Power" name="trm" onChange={handlechange} />Power
                    <br />
                    <input type="checkbox" value="Temperature 1" name="tp1" onChange={handlechange} />Temperature 1
                    <br />
                    <input type="checkbox" value="Temperature 2" name="tp2" onChange={handlechange} />Temperature 2
                    <br />
                    <input type="checkbox" value="SOC" name="soc" onChange={handlechange} />SOC
                    <br />
                    <button type='submit'>OK</button>
                </form>
            </ul>
        </div>
        <div>
            <div>{checked_arr.crt && <CurrentLineChart val="crt"/>}</div>
            <div>{checked_arr.vt1 && <CurrentLineChart val="vt1"/>}</div>
            <div>{checked_arr.vt2 && <CurrentLineChart val="vt2"/>}</div>
            <div>{checked_arr.cap && <CurrentLineChart val="cap"/>}</div>
            <div>{checked_arr.trm && <CurrentLineChart val="trm"/>}</div>
            <div>{checked_arr.tp1 && <CurrentLineChart val="tp1"/>}</div>
            <div>{checked_arr.tp2 && <CurrentLineChart val="tp2"/>}</div>
            <div>{checked_arr.soc && <CurrentLineChart val="soc"/>}</div>
        </div>
        </div>

    );
};
export default Dropdown_D1_p2