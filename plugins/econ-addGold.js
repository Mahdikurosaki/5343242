let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ tag the user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ *أدخل كمية الذهب التي ترغب في إضافتها*'
    if (isNaN(txt)) throw '🔢 only numbers'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Mínimum  *1*'
    let users = global.db.data.users
   users[who].credit += dmt

    await m.reply(`≡ *تمت إضافة الذهب*
┌──────────────
▢ *مجموع:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ هل تلقيت؟ \n\n *+${dmt}* ذهب`, who, m.text)
}

handler.help = ['addgold <@user>']
handler.tags = ['economy']
handler.command = ['إضافة_ذهب'] 
handler.rowner = true

export default handler
