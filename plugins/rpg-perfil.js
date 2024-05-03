import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, participants, isPrems }) => {
let pp = 'https://i.imgur.com/HE1dWt6.png'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {
} finally {
let { name, role, level, limit, money, exp, joincount, lastclaim, registered, regTime, age, premiumTime } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split `@` [0])
let sn = createHash('md5').update(who).digest('hex')
let str = `╭「𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐈𝐙𝐍」
│➯ *NOMBRE:* ${username} ${registered ? '(' + name + ') ': ''}
│➯ *🌐LINK:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
│➯ *RANGO:* ${role}
│➯ *✳️️NIVEL:* ${level}
│➯ *🧿EXPERIENCIA:* ${exp}
│➯ *💎DIAMANTES:* ${limit} 𝚄𝚂𝙾𝚂
│➯ *👾Hades-Coins:* ${money}
│➯ *🪙TOKES:* ${joincount}
│➯ *💥REGISTRADO:* ${registered ? 'Si': 'No'}
│➯ *✔️PREMIUN:* ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}
│➯ *📝NUMRO DE SERIE:* 
│➯ *${sn}*
╰───────────────╯`
conn.sendMessage(m.chat, { image: { url: pp }, caption: str }, { quoted: m })
//conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
