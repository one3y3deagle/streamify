// const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'disconnect',
	category: 'music',
	async execute(queue, track) {
        queue.metadata.send('Looks like my job here is done, leaving now!');
    },
};