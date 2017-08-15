const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express();

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
// use to block all request from server with no next
// app.use((req, res, next) => {
	// res.render('maintenance.hbs');
// });
 
app.use(express.static(__dirname + '/public') );

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now} : ${req.method}, ${req.url}`
	
	fs.appendFile('server.log', log + '\n');
	
	next();
});



hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});
 
hbs.registerHelper('screamIt', (text) => {
	return text.toLowerCase();
}); 
  
 
 
app.get('/',(req, res) => {
	//res.send('<h1>Hello Express</h1>'); 
	  
	//res.send({  
		// name: 'Shailendra',
		// Likes : ['Reading','Investing','Reading']
	// });
	 
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		currentYear: new Date().getFullYear()
	});
	 
});   

 
app.get('/about', (req, res) => {
	//res.send('About page');
	//res.render('about.hbs'); 
	res.render('about.hbs', { 
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
});

app.listen(5130, () =>{
	console.log('Server is up and running');
});