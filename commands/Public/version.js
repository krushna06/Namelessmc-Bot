const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const { rmSync } = require('fs');

module.exports = {
  name: 'info',
  aliases: [],
  async execute(client, message, args) {
    const response = await axios.get('https://www.fusion-network.xyz/index.php?route=/api/v2/zWB6OgEHq81fdLc35NobyPI9QsaweD4r/info').then(res => res.data).catch(() => false);
    if (!response) {
        return message.reply('An error occurred while fetching the announcement data.');
    }
    const version = response.nameless_version;
    const language = response.language;
    const update = response.version_update.update;
    const modules = response.modules;
    const error = response.error;

    //console.log(response, data);
    
    const embed = new MessageEmbed()
    .setTitle("Info")
      .setDescription(`
      Version = ${version}
      Language = ${language}
      Update = ${update}
      Modules = ${modules}
      Response = ${error}`)
      .setColor('BLUE');

    message.reply({ embeds: [embed] });
  },
};