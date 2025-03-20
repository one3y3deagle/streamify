// const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'playerStart',
	category: 'music',
	async execute(queue, track) {
        queue.metadata.send(`Started playing: **${track.title}**`);
    },
};