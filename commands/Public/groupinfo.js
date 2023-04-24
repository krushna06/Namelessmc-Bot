const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const { rmSync } = require('fs');

module.exports = {
  name: 'ginfo',
  aliases: [],
  async execute(client, message, args) {
    const response = await axios.get('https://www.fusion-network.xyz/index.php?route=/api/v2/zWB6OgEHq81fdLc35NobyPI9QsaweD4r/groupInfo').then(res => res.data).catch(() => false);
    if (!response) {
        return message.reply('An error occurred while fetching the webinfo data.');
    }
    const groups = response.id;
    const name = response.name;

    console.log(response);
    
    const embed = new MessageEmbed()
    .setTitle("Info")
      .setDescription(`${groups}`)
      .setColor('BLUE');

    message.reply({ embeds: [embed] });
  },
};