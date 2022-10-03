const express = require('express');
const app = express();

app.use('/static', express.static('static'));  

// set view engine
app.set('view engine','hbs');

app.get("/",(req,res) => {
	// res.send('Hello from express');
	res.render('index',{
		user: 'user',
		placeholder: '<span class="abc">target</span>'
	}) 
})

app.listen(3000, ()=>{
	console.log('listening port 3000');
})