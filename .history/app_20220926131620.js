const express = require('express');
const app = express();

app.use('/static', express.static('static'));  

// set view engine
app.set('view engine','hbs');

app.get("/",(req,res) => {
	res.render('locality',{
		user: 'user',
		// header: '<header> <nav> <div class="logo"> <img src="/static/img/HomesfyLogo.svg" alt=""> </div> <div class="nav-btn"> <ul> <li> <div class="arrow"> <div class="arrow-btn"> <img src="/static/img/up-arrow.png" alt=""> </div> </div> <div class="call"> <div class="call-btn"> <img src="/static/img/call.png" alt=""> </div> </div> <div class="question"> <div class="question-btn"> <img src="/static/img/question.png" alt=""> </div> </div> </li> <li> <button class="menu"> Menu <img src="/static/img/up-arrow.png" alt=""></button> </li> </ul> </div> </nav> </header>',
		// banner: '<div class="banner-content"> <p> Looking to buy property ?</p> <h1> Find your dream home instead.</h1> <div class="search-box"> <input type="text" placeholder="Search by location, project name or builder"> <div> <button class="location-btn"> <img src="/static/img/up-arrow.png" alt=""></button> <button class="search-btn"> search</button> </div> </div> </div>',
		// heading: '<div class="heading-content"> <h2 class="heading">Popular</h2> <select name="localities" id="localities"> <option value="">Localities in Mumbai</option> <option value="Knadivali">Knadivali</option> <option value="Bandra">Bandra</option> </select> </div>'
	}) 
})

app.get("/meeting",(req,res) => {
	res.render('home-meeting',{
		// user: 'user',
		header: '<header> <nav> <div class="logo"> <img src="/static/img/HomesfyLogo.svg" alt=""> </div> <div class="nav-btn"> <ul> <li> <div class="arrow"> <div class="arrow-btn"> <img src="/static/img/up-arrow.png" alt=""> </div> </div> <div class="call"> <div class="call-btn"> <img src="/static/img/call.png" alt=""> </div> </div> <div class="question"> <div class="question-btn"> <img src="/static/img/question.png" alt=""> </div> </div> </li> <li> <button class="menu"> Menu <img src="/static/img/up-arrow.png" alt=""></button> </li> </ul> </div> </nav> </header>',
		// banner: '<div class="banner-content"> <p> Looking to buy property ?</p> <h1> Find your dream home instead.</h1> <div class="search-box"> <input type="text" placeholder="Search by location, project name or builder"> <div> <button class="location-btn"> <img src="/static/img/up-arrow.png" alt=""></button> <button class="search-btn"> search</button> </div> </div> </div>',
		// heading: '<div class="heading-content"> <h2 class="heading">Popular</h2> <select name="localities" id="localities"> <option value="">Localities in Mumbai</option> <option value="Knadivali">Knadivali</option> <option value="Bandra">Bandra</option> </select> </div>'
	}) 
})

app.listen(3000, ()=>{
	console.log('listening port 3000');
})