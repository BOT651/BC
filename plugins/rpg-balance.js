let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`╭「 𝗕𝗖 」
│💰 *𝐁𝐀𝐋𝐀𝐍𝐂𝐄* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣❏ *✨*NOMBRE:* ${name}
│➯‣❏ *💎DIAMANTES:* ${global.db.data.users[who].limit}💎
│➯‣❏ *💥TOKES* 🪙${global.db.data.users[who].joincount}
│➯‣❏ *BC* ${global.db.data.users[who].money}
│➯‣❏ *🧿EXP*${global.db.data.users[who].exp}
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「 𝗕𝗖 」
│➯‣ 📝*NOTA:*
│➯‣*PUEDES COMPRAR DIAMANTES 💎 USANDO LOS COMANDOS*
│➯‣❏ *${usedPrefix}buy <cantidad>*
│➯‣❏ *${usedPrefix}buyall*
╰───────────────╯`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
handler.register = true
export default handler
