const express = require('express');
const path = require('path');
const expHBS = require('express-handlebars');
const app = express();

const hbs = expHBS.create({
	extname: 'hbs',
	defaultLayout: 'details',
	layoutsDir: path.join(__dirname,'views/pages'),
	partialsDir: path.join(__dirname,'views/components')
});

app.use('/static', express.static('static'));

app.engine('hbs',hbs.engine);

// set view engine
app.set('views',path.join(__dirname,'views/pages')); 

app.set('view engine','hbs');

app.get("/",(req,res) => {
	res.render('home',{
		user: 'babita'
	})
})

app.get("/listing",(req,res) => {
	res.render('listing',{
	}) 
})

app.get("/details",(req,res) => {
	res.render('details',{
		user: '<span>babita</span>',
		Img: '/static/img/details/Landscaped.png',
		text: 'Landscaped Gardens'
	}) 
})

app.listen(3000, ()=>{
	console.log('listening port 3000');
})