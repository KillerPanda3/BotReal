const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('monkey')
		.setDescription('test your racistsness'),
	async execute(interaction) {
        await interaction.reply(`you are a racist`)
		//define first response
		console.log('Ping command - completed')
	},
};