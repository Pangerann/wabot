let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.ichikaa.xyz/api/randomimage?q=bdsm&apikey=AAgXXQeo`
  conn.sendFile(m.chat, res, 'bdsm.jpg', 'huu suka ama bdsm', m)
}
handler.help = ['bdsm']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(bdsm)$/i

module.exports = handler
