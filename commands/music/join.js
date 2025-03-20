const {SlashCommandBuilder} = require('discord.js');
import { useQueue } from 'discord-player';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pause the currently playing song.'),
    async execute(interaction) {
        const queue = useQueue(interaction.guild);
        if (!queue?.isPlaying()) {
            return interaction.reply({ content: `No music currently playing ${interaction.member}` });
        }

        queue.node.pause();

        return interaction.reply({ embeds: `Paused the current music \`${queue.currentTrack.title}\` by ${interaction.member}.` });
    },
}