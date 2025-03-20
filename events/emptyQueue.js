// const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'emptyQueue',
	category: 'music',
	async execute(queue, track) {
        queue.metadata.send('Queue finished!');
    },
};