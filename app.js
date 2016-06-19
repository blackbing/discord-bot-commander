var Discord = require("discord.js");
var config = require('./config');

var mybot = new Discord.Client();
var commands = require('./commands');

mybot.on("message", function(message) {
  var content = message.content.trim();
  var isMentioned = message.isMentioned(mybot.user);
  if (!isMentioned) {
    return;
  }
  var help = true;
  commands.forEach(function(command){
    if (command.phrase.test(content)) {
      var reply = command.callback();
      mybot.reply(message, reply);
      help = false;
      return;
    }
  });
  if (help) {
    var commandList = commands.map(function(command) {
      return command.phrase.toString()
    }).join('\n');
    mybot.reply(message, "What can I do for You?\n" + commandList);
  }
});

mybot.loginWithToken(config.token);
// If you still need to login with email and password, use mybot.login("email", "password");
