// require the discord.js module
const Discord = require("discord.js");

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

// login to Discord with your app's token
client.login("ODA0NjIyMjUxMTQ4MzEyNTg2.YBPA3Q.9o4OzMSXIhGGV2H6PIayiWke18w");
const discord = require("discord.js");
const Client = new Discord.Client();
//CLIENT EVENTS
client.on("ready", () => {
  console.log("Ready to boom your ears | Bot created by ANTOR");
  client.user.setActivity("Bot created by |√|ANNTOR#8129|😎|");
});

client.on("message", msg => {
  if (msg.content === "https://") {
    msg.reply("@everyone https://discord.gg/3dfUfR8MZR");
  }
});
