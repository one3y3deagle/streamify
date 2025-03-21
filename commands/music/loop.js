const {SlashCommandBuilder} = require('discord.js');
const {QueueRepeatMode, useQueue} = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('loop')
        .setDescription('Loop the queue in different modes.')
        .addNumberOption((option) =>
            option
              .setName('mode')
              .setDescription('The loop mode')
              .setRequired(true)
              .addChoices(
                {
                  name: 'Off',
                  value: QueueRepeatMode.OFF,
                },
                {
                  name: 'Track',
                  value: QueueRepeatMode.TRACK,
                },
                {
                  name: 'Queue',
                  value: QueueRepeatMode.QUEUE,
                },
                {
                  name: 'Autoplay',
                  value: QueueRepeatMode.AUTOPLAY,
                },
              ),
          ),
    async execute(interaction) {
        // Get the loop mode
        const loopMode = interaction.options.getNumber('mode');
        
        // Get the current queue
        const queue = useQueue(interaction.guild);
        
        if (!queue) {
            return interaction.reply('This server does not have an active player session.',);
        }
        
        // Set the loop mode
        queue.setRepeatMode(loopMode);
        
        // Send a confirmation message
        return interaction.reply(`Loop mode set to ${QueueRepeatMode[loopMode]} by ${interaction.user}`);
    },
}