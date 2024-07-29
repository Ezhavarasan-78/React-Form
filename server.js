const express=require('express');
const mysql=require('mysql2');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express()
app.use(cors())
app.use(bodyparser.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Kingslayer@78',
    database:'react'

})

db.connect(err=>{
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }
      console.log('Connected to MySQL');
})

app.post('/signup', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Server error');
      }
      res.status(201).send('User registered successfully');
      
    });
  });
const port=4000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
