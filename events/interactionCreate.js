const { Events, MessageFlags } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error('There was an error while executing this command:', error);
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
				} else {
					await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
				}
			}
		} else if (interaction.isAutocomplete()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command || !command.autocomplete) {
				console.error(`No autocomplete function for command ${interaction.commandName} found.`);
				return;
			}

			try {
				await command.autocomplete(interaction);
			} catch (error) {
				console.error('There was an error while fetching autocomplete options!', error);
				await interaction.reply({ content: 'There was an error while fetching autocomplete options!', ephemeral: true });
			}
		}
	},
};
