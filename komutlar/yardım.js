const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const config = require('../config');
const prefix = config.prefix;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('Sunucu Kurallarımız').setStyle('LINK').setURL('https://discord.com/channels/1086678846016860242/1218638890953474130');
  const dc = new MessageButton().setLabel('Parsher Discord').setStyle('LINK').setURL('https://discord.gg/bdfd');
  const destek = new MessageButton().setLabel('Destek').setStyle('LINK').setURL('http://parsher.xyz');
  const row = new MessageActionRow().addComponents(dc, yt, destek)
  const embed = new MessageEmbed()
  .setTitle(`Parsher v13 Kayıt Botu`)
  .addField(`${prefix}kayıt`,`Kullanıcıları kayıt eder.`,false)
  .addField(`${prefix}yetkili-rol ayarla/sıfırla`,`kayıt yetkili rolü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıt-rol ayarla/sıfırla`,`kayıt edilince verilecek rolü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıtsız-rol ayarla/sıfırla`,`kayıtsız rolünü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıt-kanal ayarla/sıfırla`,`kaydın yapılacağı kanalı ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıt-log ayarla/sıfırla`,`logların gideceği kanalı ayarlar/sıfırlar.`,false)
  .addField(`${prefix}jail-rol ayarla/sıfırla`,`jail rolünü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}jail al`,`jail rolünü alır.`,false)
  .addField(`${prefix}ping`,`Botun pingini gösterir.`,false)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setImage("https://media.discordapp.net/attachments/1087824262322212975/1115390850248229014/standard_12.gif?ex=65f8b12d&is=65e63c2d&hm=aee0f51166b3c35c8cf482f1a255871df5dfbb2a964fa0fa9fe77a207c2b0286&")
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL())
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "yardım";