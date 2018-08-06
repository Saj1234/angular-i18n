const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname + "/public/" });
});

app.listen(3000, () => console.log('angular-i18n app listening on port 3000! - http://localhost:3000/'))