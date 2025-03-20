const { ActivityType, PresenceUpdateStatus, Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
			activities: [
				{
					type: ActivityType.Streaming,
					name: 'Season 69',
					url: 'https://www.avishakeadhikary.github.io/'
				}
			],
			afk: false,
			status: PresenceUpdateStatus.Online,
		});
	},
};