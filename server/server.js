var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Route includes
var indexRouter = require('./routes/index.router');
var taskRouter = require('./routes/task.router');


var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
// app.use(sessionConfig);

// Start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use('/task', taskRouter);

// Catch all bucket, must be last!
app.use('/', indexRouter);


// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});
