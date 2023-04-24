const { COOLDOWN } = require('../../JSON/config.json');

module.exports = {
    name: 'test',
    aliases: ['t'],
    cooldown: COOLDOWN,
    execute(client, message, args) {
    }
}