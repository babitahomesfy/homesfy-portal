const express = require('express');
const app = express();

app.use('/static', express.static('static'));  

// set view engine
app.set('view engine','hbs');

app.get("/",(req,res) => {
	res.render('locality',{
		user: 'user',
		placeholder: '<header> <nav> <div class="logo"> <img src="/static/img/HomesfyLogo.svg" alt=""> </div> <div class="nav-btn"> <ul> <li> <div class="arrow"> <div class="arrow-btn"> <img src="/static/img/up-arrow.png" alt=""> </div> </div> <div class="call"> <div class="call-btn"> <img src="/static/img/call.png" alt=""> </div> </div> <div class="question"> <div class="question-btn"> <img src="/static/img/question.png" alt=""> </div> </div> </li> <li> <button class="menu"> Menu <img src="/static/img/up-arrow.png" alt=""></button> </li> </ul> </div> </nav> </header>'
	}) 
})

app.listen(3000, ()=>{
	console.log('listening port 3000');
})