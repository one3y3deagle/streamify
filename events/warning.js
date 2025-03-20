const { Events } = require('discord.js');

module.exports = {
    name: Events.Warn,
    execute(err) {
        console.log(`Warning: ${message}`);
    },
};