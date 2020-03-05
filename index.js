const tmi = require('tmi.js');
const config = require("./config.json");

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: 'HeyJack',
    password: 'oauth:w42uwx0u2fgdrxfhy13hsiunubu711',
  },
  channels: ['HeyJack'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
  client.action('HeyJack', 'Hey Gamers HeyJackBot is now connected!')
});
