import React,{ useState} from 'react'
import { Button, Card, Form} from 'react-bootstrap';


import { Link } from 'react-router-dom';



 function BankForm() {

  const [amounts, setAmounts] = useState({
    deposit: 0,
    withdraw: 0
  });
  const [balance, setBalance] = useState(100);
 


  const onChangeBalance = (e) => {
    e.preventDefault()
    if (amounts >= 0) {
      let amounts = Number(e.target.value);

      let balanceNew = (Number(balance + amounts))
      setBalance(balanceNew)
      return alert('Success! Deposit Received.')
    } else if (amounts === isNaN) {
       return alert('Please enter only numbers.');
    } else {
      return alert('Error, Negative Deposit Amount!');
    }
   }


    return (
      <Card style={{ display: "grid", textAlign: 'center', width: '700'}}>
        <Form>
          <>
            <h5  className="card-balance mb-4" type="number" id="update-balance" 
              style={{ textAlign: 'center' }}>Current Balance = $ {balance} </h5>

            <h5 className="card-title mb-5" style={{ backgroundColor: 'limegreen' }}>Make a Deposit</h5>


            <div>
              <h5 className='me-auto mb-3'>Deposit Amount</h5>

              <span className="input-deposit" style={{ height: 40, width: 40, textAlign: 'center' }}>$</span>

              <input  placeholder="Enter deposit Amount" onChange={((e) => setAmounts(e.target.value))} value={amounts}
                id="amount" type="number" className="event" aria-label="Amount"  />
            </div>

            <Button disabled={!amounts}  onClick={onChangeBalance} value={amounts} type="submit" >Deposit</Button>
          </>
        </Form>
        <Link style={{ display: "flex", position: 'flex-bottom' }} to="/withdraw" className="withdraw-link"><Button style={{backgroundColor: "blanchedalmond", color:"grey" }}>Withdraw</Button></Link>
      </Card>)
  }

export default BankForm;