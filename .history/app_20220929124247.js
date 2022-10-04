const express = require('express');
const path = require('path');
const expHBS = require('express-handlebars');
const app = express();

const hbs = expHBS.create({
	extname: 'hbs',
	defaultLayout: 'home',
	layoutsDir: path.join(__dirname,'views/pages')
});

app.engine('hbs',hbs.engine);

app.use('/static', express.static('static'));  

// set view engine
app.set('view engine','hbs');

app.get("/",(req,res) => {
	res.render('home',{
		user: 'user',
		}) 
})

app.get("/listing",(req,res) => {
	res.render('listing',{
	}) 
})

app.get("/details",(req,res) => {
	res.render('details',{
	}) 
})

app.listen(3000, ()=>{
	console.log('listening port 3000');
})