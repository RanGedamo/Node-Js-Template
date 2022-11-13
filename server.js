const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send({massage:"success"});
});



app.listen(port,()=>{
    console.log(`Looking to port : ${port}`);
});