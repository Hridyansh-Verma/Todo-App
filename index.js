const express = require('express')
const app = express()
const PORT =3000

app.use(express.json())

app.post("/todo",(req,res)=>{

})

app.get("/todos",(req,res)=>{

})

app.put("/todo",(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log("Listening in port",PORT)
})