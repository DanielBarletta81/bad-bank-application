import React from 'react'
import { Link } from 'react-router-dom';
import logo from "./bank.png";

function CardHome() {
    return (
       <div className="card" style={{
        width: 500, height: 650, alignSelf: 'bottom'}} >
        <img src={logo} style={{height: 275, width: 500}} className="card-img-top" alt="logo"/>
        <div className="card-body" style={{backgroundColor: 'aquamarine', border: 'border-box'}}>
          
          <h5 className="card-title">About Bad Bank</h5>
    <p className="card-text">Bad Bank, we're the best bank in the world, without the pesky security features of more "traditional" banks! Get started below by creating a new account with us, we look forward to doing business with you.</p>
  <Link to="/createaccount" className="btn btn-primary">Get Started</Link>
  </div>
        </div>
          
  )
}


export default CardHome;