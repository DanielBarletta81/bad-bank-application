import React, {useState} from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function FormWithdraw() {
  
  const [amounts, setAmounts] = useState({
    deposit: 0,
    withdraw: 0
  });
  const [balance, setBalance] = useState(100);


  const onChangeBalance = (e) => {
    e.preventDefault()
    if (amounts >= 0) {
      let amounts = Number(e.target.value);

      let balanceNew = (Number(balance - amounts))
      setBalance(balanceNew)
    } else if (amounts >= balance) {
      return alert('Insufficient Funds!!');
    } else {
      return alert('Error, please enter a valid withdrawal Amount!');
    }
  }

    return (
      <Card style={{ display: "grid", textAlign: 'center' }}>
        <Form>
          <>
            <h5  className="card-balance mb-4" type="number" id="update-balance" 
              style={{ textAlign: 'center' }}>Current Balance = $ {balance} </h5>

            <h5 className="card-title mb-5" style={{ backgroundColor: 'limegreen' }}>Make a Withdrawal</h5>


            <div>
              <h5 className='me-auto mb-3'>Withdraw Amount</h5>

              <span className="input-withdraw" style={{ height: 40, width: 100, textAlign: 'center' }}>$</span>

              <input onChange={((e) => setAmounts(e.target.value))} value={amounts} style={{ height: 30, width: 225}}
                id="amount" type="number" className="event" aria-label="Amount" placeholder="Enter Withdraw Amount" />
            </div>

     <Button disabled={!amounts ? true: false} onClick={onChangeBalance} value={amounts} type="submit" >Withdraw</Button>
          </>
        </Form>
        <Link style={{ display: 'flex', position: "flex-bottom"}} to="/deposit" className="deposit-link"><Button style={{ backgroundColor: "blanchedalmond" , color:"grey" }}>Deposit</Button></Link>
      </Card>)
  }
    
export default FormWithdraw;
