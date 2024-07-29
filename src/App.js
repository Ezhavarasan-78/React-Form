
import './App.css';
import './LogIn.css'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<LogIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
