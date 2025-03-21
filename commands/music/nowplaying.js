const {SlashCommandBuilder} = require('discord.js');
const {useQueue} = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nowplaying')
        .setDescription('Display the currently playing song'),
    async execute(interaction) {
      // Get the queue for the guild
      const queue = useQueue(interaction.guild);
    
      if (!queue) {
        return interaction.reply('This server does not have an active player session.',);
      }
    
      // Get the currently playing song
      const currentSong = queue.currentTrack;
    
      // Check if there is a song playing
      if (!currentSong) {
        return interaction.reply('No song is currently playing.');
      }
    
      // Send the currently playing song information
      return interaction.reply(`Now playing: ${currentSong.title}\n${queue.node.createProgressBar()}`,);
  },
}