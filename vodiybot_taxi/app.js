const http = require('http');
const bodyparser = require('body-parser');
const express = require('express');

const app = express();



var TelegramBot = require("node-telegram-bot-api");
var token = "1448913662:AAGtSHbNNov5Me-jdpM0NcHzYUHjzE_mEsY";
var bot = new TelegramBot(token, {polling:false});    

app.use(bodyparser.json());


app.post('/nd', (req, res)=>{
    res.setHeader('Content-type', 'application/json');

var echo = {url:"https://mobilproject.github.io/furqon_web_express/"}
    bot.answerCallbackQuery(req.body.callback_query.id,echo);
console.log(bot);
    res.end();
})

app.listen(80, ()=>{
    console.log("server running");
});