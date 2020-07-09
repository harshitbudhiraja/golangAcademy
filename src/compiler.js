var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path = require('path');

app.use(bodyparser());

// var compiler = require('compilex');
// const { compileCPPWithInput } = require("compilex/cppModule");
// var option = {stats : true}; //prints stats on console 
// compiler.init(option);

// app.get('/', function(req,res){
//     res.sendFile(__dirname + "home.jsx")
// });

// app.post('/send',function(req,res){
//     console.log("received");
// })

// app.post('/compile', function(req,res){
//     var code = req.body.code;
//     var input = req.body.input;
//     var language = req.body.language;

//     if(language=== "C" || "C++" || "C++11"){

//         var envData = { OS : "windows" , cmd : "g++"};
//         compiler.compileCPPWithInput(envData , code , input, function(data){
//             if(data.error){
//                 res.send(data.error);
//             }
//             else{
//                 res.send(data.output);
//             }
//         });
//     }

//     if(language === "Java"){
//         var envData = {OS :"windows"};
//         console.log(code);
//         compiler.compileCPPWithInput(envData,code,input, function(data){
//             res.send(data);
//         });
//     }

    
    
// });

// app.get('/fullstat', function(req,res){
//     compiler.fullStat(function(data){
//         res.send(data);
//      });
//      });

app.listen(3001 , ()=>{
    console.log("started at 3001");
});
