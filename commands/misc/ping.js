/* eslint-disable no-unused-vars */
module.exports = {
	commands: ['ping', 'latency'],
	callback: (message, args, text, client) => {
		message.reply(`🏓Latency is **${Math.round(client.ws.ping)}**ms`);
	},
};