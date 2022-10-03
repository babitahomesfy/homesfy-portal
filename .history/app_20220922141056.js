const express = require('express');
const app = express();

app.get("/",(req,res) => {
	res.send('Hello from express');
})

app.get("/about",(req,res) => {
	res.json({message:'paisa dedo',id:29});
})

app.listen(3000, ()=>{
	console.log('listening port 3000');
})