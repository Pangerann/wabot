let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.ichikaa.xyz/api/randomimage/husbu?apikey=79lJ9HEA`
  conn.sendFile(m.chat, res, 'husbu.jpg', 'huu suka ama husbu', m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.premium = true
handler.limit = true

handler.command = /^(husbu)$/i

module.exports = handler
