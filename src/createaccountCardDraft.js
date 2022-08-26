import React,  { useState, useContext } from 'react'
import {  Card, Container } from 'react-bootstrap';
import { UserContext } from './App1';


function CreateNewAccount() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    console.log(name, email, password)
    
    function happyToast() {
        if (name && email && password) {
            alert('Success!! You have created an account!');
       ctx.users.push({name,email,password,balance:100});  
        }
       
   }
    function clearForm() {
            setName('');
            setEmail('');
            setPassword('');
}


    return (<>
        <h2 style={{ backgroundColor: 'silver', textAlign: 'center' }}>Create a New Account</h2>
<Card>
 <Container fluid style={{alignContent: 'center' }}>
 <form onSubmit ={clearForm}  className="needs-validation"   style={{ height: 700, width: 600, backgroundColor: 'slategray', borderStyle: 'groove', alignSelf: 'center', alignContent: 'center', alignItems: 'center', margin: 10, gap: 25 }}>
                
<label >Name</label>
                
 <input type="input" className="form-control" id="validationName" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} required/>
                
                <label>Email address</label>
                
 <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} required/>
                
                <label>Password</label>
                
<input type="new-password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} required/>
                
                    <button onClick={happyToast } style={{ backgroundColor: 'cornflowerblue' }} type="submit" className="btn btn-light" >Create Account</button>
        </form> </Container>
     </Card >
 </>  )
    
}
               
export default CreateNewAccount;