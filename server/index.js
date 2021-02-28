const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());


const port=process.env.PORT||5000;

app.listen(port,(req,res)=>{
    console.log(`server is running on port:${port}`);
})




