var twit = require("twit");
var config = require("./config.js");
var randomItem = require("random-item");
var OAuth  = require("OAuth");

var twitter = new twit(config);

console.log("Bot rodando")

var quotes = [
    "Upupupupupu!",
    "Puhuhu",
    "Waku waku doki doki",
    "good morning, everyone!",
    "I'm not a teddy bear! I...am...Monokuma!",
    "IT'S... PUNISHMENT TIIIME!",
];

function BotInit(){
    var stream = twitter.stream('statuses/filter', { track: '@monomono_bot'})

    stream.on('tweet', function (tweet) {
        console.log(tweet)

        twitter.post("statuses/update", {
            status: randomItem(quotes),
            in_reply_to_status_id: tweet.id_str,
            auto_populate_reply_metadata: true
        })
    })
}

setInterval(BotInit, 5*60*1000)

BotInit()