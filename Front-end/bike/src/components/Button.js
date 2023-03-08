import React, { Component } from "react";
import axios from "axios";
import './Button.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default class AddItem extends Component
{
    constructor()
    {
        super();
        this.state={id:0,manufacturer:"",model:"",mileage:0,cc:0,gears:0};
    }
    handleIdChange=(e)=>{
        this.setState({id:e.target.value})
    }
    handleNameChange=(e)=>{
        this.setState({manufacturer:e.target.value})
    }
    handleBrandChange=(e)=>{
        this.setState({model:e.target.value})
    }
    handleCategoryChange=(e)=>{
        this.setState({mileage:e.target.value})
    }
    handleCountChange=(e)=>{
        this.setState({cc:e.target.value})
    }
    handleCostChange=(e)=>{
        this.setState({gears:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/postB",this.state);
    }
    render()
    {
        return(
            <>
            <center><h2>Add values here</h2>
            <div className="One">
            <form onSubmit={this.handleSubmit}>
            <label>Id:</label>
                <input type="number" onChange={this.handleIdChange}>
                </input>
            <br></br>
                <label>Manufacturer:</label>
                <input type="text" onChange={this.handleNameChange}>
                </input>
                <br></br>
                <label>Model:</label>
                <input type="text" onChange={this.handleBrandChange}>
                </input>
                <br></br>
                <label>Mileage:</label>
                <input type="float" onChange={this.handleCategoryChange}>
                </input>
                <br></br>
                <label>Cc:</label>
                <input type="number" onChange={this.handleCountChange}>
                </input>
                <br></br>
                <label>Gears:</label>
                <input type="number" onChange={this.handleCostChange}>
                </input>
                <br></br>
                <button>Submit</button>
            </form>
            <center><Link to="/"className='btn btn-secondary mt-3 mb-4' id='bv'><button><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>&nbsp;Back</button></Link></center>
            </div></center>
            </>
        )
    }
}