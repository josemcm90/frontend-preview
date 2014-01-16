var express = require('express'),
	swig    = require('swig'),
	cons    = require('consolidate');

var env = "production";

var app      = express(),
	server   = require('http').createServer(app);

// View engine
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.set('views', './app/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

// Add POST, PUT, DELETE methods to the app
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.methodOverride());

// Static files
app.use( express.static('./public') );

app.use(app.router);
app.use(function(req, res, next){
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
		res.render('404', {
			url: req.url 
		});
		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.send({ error: 'Not found' });
		return;
	}
});

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('500', { error: err });
});


app.get('/404', function(req, res, next){
	next();
});

app.get('/403', function(req, res, next){
	var err = new Error('not allowed!');
	err.status = 403;
	next(err);
});

app.get('/500', function(req, res, next){
	next(new Error('keyboard cat!'));
});



var home = function (req, res) {
	res.render('index',{
		env   : env
	});
};

app.get('/', home);


server.listen(process.env.PORT);

console.log('Listening');