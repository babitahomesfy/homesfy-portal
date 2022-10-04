const express = require('express');
const path = require('path');

var homeRouter = require('./routes/home');
var listingRouter = require('./routes/listing');
var detailsRouter = require('./routes/details');

const expHBS = require('express-handlebars');
const app = express();

const hbs = expHBS.create({
	extname: 'hbs',
	defaultLayout: 'details',
	layoutsDir: path.join(__dirname,'views/pages'),
	partialsDir: path.join(__dirname,'views/components')
});

// set view engine
app.engine('hbs',hbs.engine);
app.set('views',path.join(__dirname,'views/pages')); 
app.set('view engine','hbs');

app.use('/static', express.static('static'));

app.use('/', homeRouter);
app.use('/listing', listingRouter);
app.use('/details', detailsRouter);

app.listen(3000, ()=>{
	console.log('listening port 4600');
})

module.exports = app;
