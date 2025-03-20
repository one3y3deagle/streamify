// const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'playerSkip',
	category: 'music',
	async execute(queue, track) {
        queue.metadata.send(`Skipping **${track.title}** due to an issue!`);
    },
};