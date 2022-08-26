import React, { useContext } from 'react'
import { UserContext } from './App1';

function AllData() {
  const ctx = useContext(UserContext);
  return (<>
    <h2>All User Data</h2>
  
      {JSON.stringify(ctx.users)}
    </>
  )
}

export default AllData;