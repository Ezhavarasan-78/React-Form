import React,{ useState } from "react";

const SignUp = () => {
  const [username, setUsername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
      alert('Password does not matches');
      return;
    }
    fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }   
    
  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }; 
  return (
    <div>
      <form className="A" onSubmit={handleSubmit}>
        
        <h2>SignUp</h2>
        <label>Username :</label><br></br>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}></input><br></br>
        <label>Email :</label><br></br>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input><br></br>
        <label>Password :</label><br></br>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input><br></br>
        <label>Confirm Password :</label><br></br>
        <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></input><br></br>
        <button>Submit</button><br></br>
        <a href="/login">Back to Login</a>
      </form>
    </div>
  )
}

export default SignUp
