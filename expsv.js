var mongojs = require('mongojs');
var config = require('./config.js');
var db = mongojs(config.mlabstring, ["thesubmissions"]);
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

app.use(express.static('public'));
app.set('view engine', 'ejs

var count = 0;

var firstName = [];
var lastName = [];

app.get('/formpost', function(req, res) {


  db.thesubmissions.save({
    "theFirstName": req.query.first,
    "theLastName": req.query.last
  }, function(err, saved) {
    if (err || !saved) console.log("Not saved");
    else console.log("Saved");

  });

  
  
  
  res.redirect('/display');
});



app.get('/display', function(req, res) {


db.thesubmissions.find({}, function(err, saved) {
    if (err || !saved) {
      console.log("No results");
    } else {
      console.log(saved);
      res.render('template.ejs', {
        colordata: saved
      });
    }
  });
});





app.get('/count', function(req, res) {



  count++;
  res.send("<html><body><h1>"+count+"</h1></body></html>");
});


var query = new RegExp(req.query.q, 'i');
  db.thesubmissions.find({
      "theColorName": query
    },
    function(err, saved) {
      if (err || !saved) {
        console.log("No results");
      } else {
        res.render('result.ejs', {
          namedata: saved
        });
      }
  });
});



app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/somethingelse', function(req, res) {
  res.send("Goodbye");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

