const express = require('express');
const path = require('path');
const expHBS = require('express-handlebars');

var homeRouter = require('./routes/home');
var listingRouter = require('./routes/listing');
var detailsRouter = require('./routes/details');

const app = express();

const hbs = expHBS.create({
	extname: 'hbs',
	defaultLayout: 'home',
	layoutsDir: path.join(__dirname,'views/pages'),
	partialsDir: path.join(__dirname,'views/components')
});

app.use('/static', express.static('static'));

app.engine('hbs',hbs.engine);

// set view engine
app.set('views',path.join(__dirname,'views/pages')); 

app.set('view engine','hbs');

app.use('/', homeRouter);
app.use('/users', usersRouter);

app.listen(3000, ()=>{
	console.log('listening port 3000');
})

module.exports = app;

