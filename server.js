var app = require('express')();
var port = process.env.PORT || 3000;
var parser= require('ua-parser-js');

app.listen(port, function(){
  console.log('Listening on port ' + port);
});

app.get('/api/whoami/', function(req, res){
  var ip = req.ip;
  var language = req.get("accept-language").split(',')[0];
  var os = parser(req.get('User-Agent')).os;
  var software = os.name + ' ' + os.version;
  res.json({
    "ipaddress": ip,
    "language": language,
    "software": software
  });
})
