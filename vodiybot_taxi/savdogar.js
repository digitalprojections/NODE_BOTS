const https = require('https');
const bodyparser = require('body-parser');
const express = require('express');
const router = express.Router();

const app = express();
//https://a22343b7b1cc.ngrok.io
//vodiylikbot
var token = "1618339183:AAGhAttx_Vr8aolOVkMRwn8R656bmf7eRz8";
app.use(bodyparser.json());

app.use(router);

app.post('/', (req, res)=>{    
        res.setHeader('Content-type', 'application/json');
        res.status(200);
        res.end();

console.log(req.body);

if(req.body.callback_query){
    var data = JSON.stringify({callback_query_id:req.body.callback_query.id, url:"https://mobilproject.github.io/furqon_web_express/"});
    sendResponse2Telegram('answerCallbackQuery', data);
}else if(req.body.message){
    
    var chat_id = req.body.message.chat.id;
    
    console.log(req.body.message.text, " text");
    //need to distinguish inline call    
    switch(req.body.message.text){
        case '/start':
            var keyboard = {
                inline_keyboard: [
                    [
                        {"text": "TAXI", "url": "t.me/vodiylikbot?game=taxi"}
                    ]
                ]
            };
            var data = JSON.stringify({
                chat_id:chat_id,
                text:"Marhamat, dasturni tanlang",
                reply_markup:keyboard
            });
            

            sendResponse2Telegram('sendMessage', data);
            break;
    }

}

        /*


    var data = JSON.stringify({callback_query_id:req.body.callback_query.id, url:"https://mobilproject.github.io/furqon_web_express/"});
        //console.log(res);
        
        const options = {
            hostname: 'api.telegram.org',
            port: 443,
            path: '/bot1618339183:AAGhAttx_Vr8aolOVkMRwn8R656bmf7eRz8/answerCallbackQuery',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': data.length
            }
          } 
          const req2 = https.request(options, res2 => {
            console.log(`statusCode: ${res2.statusCode}`)
          
            res2.on('data', d => {
              process.stdout.write(d)
            })
          })
          
          req2.on('error', error => {
            console.error(error)
          })
          
          req2.write(data)
          req2.end()   */
})


function sendResponse2Telegram(t_method, data)
{
        const options = {
            hostname: 'api.telegram.org',
            port: 443,
            path: '/bot1618339183:AAGhAttx_Vr8aolOVkMRwn8R656bmf7eRz8/'+t_method,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': data.length
            }
          } 
          const req2 = https.request(options, res2 => {
            console.log(`statusCode: ${res2.statusCode}`)
          
            res2.on('data', d => {
              //process.stdout.write(d)
            })
          })
          
          req2.on('error', error => {
            console.error(error)
          })
          
          req2.write(data)
          req2.end()
}


app.listen(3000, ()=>{
    console.log("server running");
});