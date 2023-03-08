import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));



export default class CustomizedTables extends React.Component 
{
    constructor()
    {
        super();
        this.state={Items:[]};
    }
    componentDidMount()
    {
        axios.get('http://localhost:8080/getB')
        .then(response => {
            console.log(response.data);
          this.setState({ Items: response.data });
        })
        .catch(error => {
          console.log(error);
        });    
    }
    handleClick=(e)=>{
        console.log(e.target.id);
        var l=axios.delete('http://localhost:8080/deleteB/'+e.target.id);
        console.log(l);
        window.location.reload();
    }
    render(){
  return (
    <div>
    <div className='for'>
      <h2>Bike Models List</h2>
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Manufacturer</StyledTableCell>
            <StyledTableCell align="center">Model</StyledTableCell>
            <StyledTableCell align="center">Mileage</StyledTableCell>
            <StyledTableCell align="center">Cc</StyledTableCell>
            <StyledTableCell align="center">Gears</StyledTableCell>
            <StyledTableCell align="center">Delete values</StyledTableCell>
            <StyledTableCell align="center">Update values</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.Items.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.manufacturer}</StyledTableCell>
              <StyledTableCell align="center">{row.model}</StyledTableCell>
              <StyledTableCell align="center">{row.mileage}</StyledTableCell>
              <StyledTableCell align="center">{row.cc}</StyledTableCell>
              <StyledTableCell align="center">{row.gears}</StyledTableCell>
              <StyledTableCell align="center"><button id={row.id} onClick={this.handleClick}>Delete</button></StyledTableCell>
              <StyledTableCell align="center"><Link to={"/update/"+row.id}><button id={row.id} onClick={this.handleUpdate}>Update</button></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <br></br><br></br>
      <hr></hr>
     
      <center>
  
      <Button> <Link to="/app"> <button>
        ADD</button></Link>
      </Button></center>
      <hr></hr>
    </TableContainer></div></div>
  );
 }
}