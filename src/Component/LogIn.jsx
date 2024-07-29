import React from 'react'


const LogIn = () => {
  
  return (
    <div>
      <form className="B">
         <h2>Log-In</h2>
         <label>Email :</label><br></br>
         <input type="email"></input>
         <label>Password :</label><br></br>
         <input type="password"></input>
         <p>Do you not have an account then <a href="/signup">Click</a>here to register</p>
         <button>Submit</button>
      </form>
     
    </div>
  )
}

export default LogIn
