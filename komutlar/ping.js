const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('Parsher Youtube').setStyle('LINK').setURL('http://youtube.com/@parsher_');
  const dc = new MessageButton().setLabel('Parsher Discord').setStyle('LINK').setURL('https://discord.gg/bdfd');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`Parsher v13 Kayıt Botu`)
  .addField(`> Pingim`,`${client.ws.ping}ms`,false)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL())
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "ping";