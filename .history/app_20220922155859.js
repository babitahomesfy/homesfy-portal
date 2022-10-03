const express = require('express');
const app = express();

// set view engine
app.set('view engine','hbs');

app.get("/",(req,res) => {
	// res.send('Hello from express');
	res.render('index',{
		user: 'bhoot',
		placeholder: '<span class="abc">jane do</span>'
	})
})

// app.get("/about",(req,res) => {
// 	res.json({message:'paisa kamao ghar se bhago',id:29});
// })

app.listen(3000, ()=>{
	console.log('listening port 3000');
})