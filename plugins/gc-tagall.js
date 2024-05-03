let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*MENSAJE:* ${pesan}`
let teks = `*⺀𝗜𝗡𝗩𝗢𝗖𝗔𝗡𝗗𝗢 - 𝗚𝗥𝗨𝗣𝗢⺀*\n\n❏ ${oi}\n\n❏ *ETIQUETAS:*\n`
for (let mem of participants) {
teks += `┣👻 @${mem.id.split('@')[0]}\n`}
teks += `└ @bryancp26`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
