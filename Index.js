const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.cache.find(
    ch => ch.name === 'general'
  );

  if (!channel) return;

  channel.send({
    content: `Welcome ${member}!`,
    files: ['./welcome.gif']
  });

});

client.login(process.env.TOKEN);
