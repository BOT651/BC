let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `------------------------------------------------------------------------------------------------------------
𝗕𝗖
*[❗] FORMATO ERRONEO!!*
✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ 
${usedPrefix + command} abrir*
${usedPrefix + command} cerrar*

------------------------------------------------------------------------------------------------------------

𝗕𝗖
*[❗]WRONG FORMAT!!*
*✨EXAMPLE✨*
${usedPrefix + command} *open*
${usedPrefix + command} *close*
------------------------------------------------------------------------------------------------------------`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] GRUPO CONFIGURADO CORRECTAMENTE*\n\n\n*[ ✔ ] GROUP CONFIGURED CORRECTLY*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
