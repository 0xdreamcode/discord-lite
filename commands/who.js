const https = require('https');
const fs = require('fs');
const Discord = require('discord.js');
const Tenor = require("tenorjs").client({
    "Key": "7DF45MF9H78C", // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});

module.exports = {
	name: '/who',
	description: 'Fetches an anime girl from Tenor',
	execute(message, args) {
    message.delete()
    args.slice(1)
    console.log(message.mentions)
	},
};
