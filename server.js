var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var bears = [];
router
    .route('/bears')
    .post(()req, res)=>{
        var bear = {};
        bear.name = req.body.name;
        bears.push(bear);
        res.json({messege: 'Bear created!'});
})
.get((req, res)=>{
    res.json(bears);
});

app.use(' /api' , bodyParser.json(), router);
app.listen(8000);
console.log("listen  port 8000");
