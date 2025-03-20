// const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'audioTrackAdd',
	category: 'music',
	async execute(queue, track) {
        queue.metadata.send(`Track **${track.title}** queued`);
    },
};