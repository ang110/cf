var express = require('express')
  , http = require('http')
  , path = require('path');
  var app = express();
var bodyParser = require('body-parser')
var Web3= require('web3')


app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'static')));





  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    startApp(web3);
    web3js = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')

    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    console.log(web3js);
  }


  





// send app to router
require('./router')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
