import { Button, Nav } from 'react-bootstrap';
import React from 'react'
import { Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  function changeBackground(e) {
    e.target.style.background = 'yellowgreen';
  }

function changeBack(e) {
    e.target.style.background = '';
  }
   


    return (<>
      <Nav className="navbar mb-4" style={{ backgroundColor: 'cornflowerblue',alignItems: 'center' ,border: 'groove'}}>
        <div style={{backgroundColor:'gainsboro'}}   className="container-fluid">
          <span className="navbar-brand mb-4 h1" style={{ backgroundColor: 'crimson', fontSize: '24pt', fontFamily: 'fantasy' , position: 'relative', marginTop:'15px'  , paddingTop: '5px' }}>Bad Bank</span>
          <ul className="nav justify-content-end" style={{ gap: 5, backgroundColor: 'cornsilk' }}>
  
            <Button onMouseOver={changeBackground} onMouseLeave={ changeBack} style={{ backgroundColor: 'chartreuse' }}  ><Link className="nav-link active" style={{ backgroundColor: 'cornsilk' }} aria-current="page" to="/">Home</Link></Button>
          
            <Button onMouseOver={changeBackground} onMouseLeave={ changeBack}
              > <Link style={{backgroundColor: 'cornsilk'}}  className="nav-link" to="/createaccount/">Create Account</Link></Button>
          
            <Button onMouseOver={changeBackground} onMouseLeave={ changeBack} >  <Link style={{backgroundColor: 'cornsilk'}}className="nav-link" to="/deposit/">Deposit</Link></Button>
          
            <Button onMouseOver={changeBackground} onMouseLeave={ changeBack}   >
              <Link style={{backgroundColor: 'cornsilk'}} to="/withdraw/" className="nav-link" >Withdraw</Link></Button>
       
            <Button onMouseOver={changeBackground} onMouseLeave={ changeBack} >
              <Link style={{backgroundColor: 'cornsilk'}}className="nav-link" to="/alldata/">All Data</Link></Button>

          </ul>
        </div>
      </Nav></>
    )
  }
