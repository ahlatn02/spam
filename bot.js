const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

client.on("ready", () => { // When the bot is ready
    console.log("OK!"); // Log "Ready!"
});

client.on("message", async message => {
  const prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

     if(message.content === "xi pam") { 
        message.channel.send("/spam")
    } 
  if(message.content === "hello meo") { 
        message.channel.send("meo meo meo")
    }
       if(message.content === "xoa di") { 
        message.channel.send("xoa")
    }
    
         if(message.content === "st") { 
        message.channel.send("/st")
    }
  if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;
  
 

  if (command === "spam") {
    var count = 1; // Number of messages sent (modified by sendSpamMessage)
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var maxMessages = 100000; // Change based on how many messages you want sent

    function sendSpamMessage() {
      try {
        // You could modify this to send a random string from an array (ex. a quote), create a
        // random sentence by pulling words from a dictionary file, or to just send a random
        // arrangement of characters and integers. Doing something like this may help prevent
        // future bots from detecting that you sent a spam message.
        message.channel.send(count + " Con mèo nhảy qua hàng rào và đi vào chuồng ngủ " + possible.charAt(Math.floor(Math.random(10) * possible.length)));
          //possible.charAt(Math.floor(Math.random() * possible.length)) 

        if (count < maxMessages) {
          // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
          // channel just for bot spamming, you can remove the below line and the entire prune command.
          // message.channel.send("/prune");
          count++;

          /* These numbers are good for if you want the messages to be deleted.
           * I've also noticed that Discord pauses for about 4 seconds after you send 9
           * messages in rapid succession, and this prevents that. I rarely have any spam
           * messages slip through unless there is a level up from mee6 or Tatsumaki. */
          let minTime = Math.ceil(2112);  // Rush RP1
          let maxTime = Math.floor(3779); // Arbitrary integer
          let timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
          setTimeout(sendSpamMessage, timeToWait);
        } else {
          // Sends a message when count is equal to maxMessages. Else statement can be
          // modified/removed without consequence.
          message.channel.send("------------------");
          message.channel.send("I AM FINISHED!!!");
          message.channel.send("------------------");
        }
      } catch (error) {
        sendSpamMessage();
      }
    }

    message.delete().catch(O_o=>{})
    sendSpamMessage();
  }

  if (command === "xoa") {
    setTimeout(prune, 1000); // Theoretically waits long enough to avoid 10008 error
    function prune() {
      // IDEA: Only delete messages sent by current user? Use other bot validation...
      message.channel.fetchMessages()
      .then(messages => {
        let message_array = messages.array();
        message_array.length = 10;
        message_array.map(msg => msg.delete().catch(console.log)); //.error
       })
      .catch(console.log); //.error
    }
  }
   
      if(message.content === "stopfff") { 
        message.channel.send("/stopfff")
    } 
    
   if(command === "st"){
  message.channel.send("180s!!!");
 sleep = function(time) {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {;
  }
  return new Promise((r, _) => r())
}
console.log("sleeping...")
sleep(1000 * 180).then(() => console.log("awake"))
  }
  
   if(command === "stopfff"){
  message.channel.send("forever!!!");
 sleep = function(time) {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {;
  }
  return new Promise((r, _) => r())
}
console.log("sleeping...")
sleep(1000 * 10000).then(() => console.log("awake"))
  }
  
  
});

client.login(process.env.botToken);
