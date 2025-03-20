// const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: 'emptyChannel',
	category: 'music',
	async execute(queue, track) {
        queue.metadata.send(`Leaving because no vc activity for the past 5 minutes`);
    },
};