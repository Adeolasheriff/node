const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample'
})

app.get('/user/:id',(req,res)=>{
    const sql = 'SELECT * FROM student WHERE id = ?';
    const id = req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err){
            return res.json("error occured")
        } else{
            return res.json(data)
        }
    })
})

app.get('/',(req,res)=>{
    const sql = 'SELECT * FROM student';
    db.query(sql,(err,data)=>{
        if(err){
            return res.json('error occured');
        }else{
            return res.json(data);
        }
    })
})

app.post('/create', (req,res)=>{
    const sql = 'INSERT INTO student (`name`,`email`) VALUES (?)';
    // const name = req.body.name
    const values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})
app.put('/update/:id',(req,res)=>{
    const sql = 'UPDATE student SET name = ?, email = ? WHERE id = ? ';
    const name = req.body.name
    const email = req.body.email
    const id = req.params.id
    // const values = [
    //     req.body.name,
    //     req.body.email
    // ];
    db.query(sql,[name,email,id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.delete('/delete/:id', (req,res)=>{
    const sql = 'DELETE FROM student WHERE id = ?';
    const id = req.params.id;

    db.query(sql,[id], (err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.listen(8080, () => {
    console.log(`Listening on port 8080`)
})