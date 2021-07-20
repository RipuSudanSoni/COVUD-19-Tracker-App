import React, { useEffect, useState } from "react";
import "./StateWiseData/statewise.css";

const Statewise = () => {
    const [data, setData] = useState([] );

    const getCovidData = async () => {
        const res = await fetch("https://api.covid19india.org/data.json");
        const actulData = await res.json();
        console.log(actulData.statewise);
        setData(actulData.statewise);
    }
    

    useEffect(() => {
        getCovidData(); 
    }, [])
     
    return (
        <>
            <div className = "container-fluid mt-5">
                <div className = "main-heading">
                    <h1 className = "mb-5 text-center"> <span className="ind">INDIA</span> <span className="text-danger">COVID-19 </span>Dashboard</h1>
                </div>
                <div className = "table-responsive">
                    <table className="table table-hover">
                        <thead className = "thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>last update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currElem, index) => {
                                    return (
                                    <tr key = {index}>
                                        <th> {currElem.state} </th>
                                        <td> {currElem.confirmed} </td>
                                        <td> {currElem.recovered} </td>
                                        <td> {currElem.deaths} </td>
                                        <td> {currElem.active} </td>
                                        <td> {currElem.lastupdatedtime} </td>
                                    </tr>
                                )
                                })
                            }
                        
                        </tbody>
                    </table>
                </div>

            </div>           
        </>
    )
}

export default Statewise;