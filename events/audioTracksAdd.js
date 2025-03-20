// const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'audioTracksAdd',
	category: 'music',
	async execute(queue, track) {
        queue.metadata.send(`Multiple Track's queued`);
    },
};