const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Check if the bot is online'),
	async execute(interaction) {
        await interaction.reply(`you are a monkey`)
		//define first response
		console.log('Ping command - completed')
	},
};