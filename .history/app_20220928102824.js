const express = require('express');
const app = express();

app.use('/static', express.static('static'));  

// set view engine
app.set('view engine','hbs');

app.get("/",(req,res) => {
	res.render('locality',{
		user: 'user',
		}) 
})

app.get("/listing",(req,res) => {
	res.render('home-meeting',{
	}) 
})

app.listen(3000, ()=>{
	console.log('listening port 3000');
})