const {SlashCommandBuilder} = require('discord.js');
const {useQueue} = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop the currently playing queue.'),
    async execute(interaction) {
        const queue = useQueue(interaction.guild.id);
        queue.delete();
        return interaction.reply(`The player has been stopped by ${interaction.user}`)
    },
}