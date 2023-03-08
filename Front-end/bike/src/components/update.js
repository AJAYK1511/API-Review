import React, { Component, useState } from "react";
import axios from "axios";
import './Button.css';
import { Link, useParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const UpdateItem=()=>
{
    const params=useParams();
    const [Manufacturer,setName]=useState("");
    const [Model,setAuction_rate]=useState("");
    const [Mileage,setFranchise]=useState(0);
    const [Cc,setRuns]=useState(0);
    const [Gears,setCenturies]=useState(0);

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleAuction_rateChange=(e)=>{
        setAuction_rate(e.target.value)
    }
    const handleFranchiseChange=(e)=>{
        setFranchise(e.target.value)
    }
    const handleRunsChange=(e)=>{
        setRuns(e.target.value)
    }
    const handleCenturiesChange=(e)=>{
        setCenturies(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8080/putB/"+params.id,{id:params.id,manufacturer:Manufacturer,model:Model,mileage:Mileage,cc:Cc,gears:Gears});
    }
        return(
            <div className="two"><center>
                <h2>Update values here</h2>
            <div className="One">
            <form onSubmit={handleSubmit}>
            <label>Manufacturer :</label>
                <input type="text" onChange={handleNameChange}>
                </input><br/>
                <label>Model:</label>
                <input type="text" onChange={handleAuction_rateChange}>
                </input><br/>
                <label>Mileage</label>
                <input type="float" onChange={handleFranchiseChange}>
                </input><br/>
                <label>Cc :</label>
                <input type="number" onChange={handleRunsChange}>
                </input><br/>
                <label>Gears :</label>
                <input type="number" onChange={handleCenturiesChange}>
                </input><br/>
            <button>Submit</button><br></br>
            <Link to="/"className='btn btn-secondary mt-3 mb-4' id='bv'><button><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>&nbsp;Back</button></Link>
            </form>
            </div></center></div>
        )
    }
    export default UpdateItem;