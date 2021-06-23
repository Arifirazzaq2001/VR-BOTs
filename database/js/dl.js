const { JSDOM } = require('jsdom')
const { fromBuffer } = require('file-type')
const fetch = require('node-fetch')
const fs = require('fs')
const qs = require('qs')
const cheerio = require('cheerio')
const formData = require('form-data')
const yts = require( 'yt-search')
const axios = require('axios')
const puppeter = require('puppeteer');

//Variable
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

//User Agent
const UserAgent = () => {
ossss = [
'Macintosh; Intel Mac OS X 10_15_7',
'Macintosh; Intel Mac OS X 10_15_5',
'Macintosh; Intel Mac OS X 10_11_6',
'Macintosh; Intel Mac OS X 10_11_5',
'Windows NT 10.0; Win64; x64',
'Windows NT 10.0',
];
return `Mozilla/5.0 (${ossss[Math.floor(Math.random() * ossss.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(
Math.random() * 3,
) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}

//Post
function post(url, formdata) {
console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
'accept-language': "en-US,en;q=0.9",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
})
}
//Tiktok Video
async function tiktok(Url) {
return new Promise (async (resolve, reject) => {
await axios.request({
	url: "https://ttdownloader.com/",
	method: "GET",
	headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
	}
}).then(respon => {
 var $ =  cheerio.load(respon.data)
 token = $('#token').attr('value')
	axios({
url: "https://ttdownloader.com/req/",
method: "POST",
data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
headers: {
	"accept": "*/*",
	"accept-language": "en-US,en;q=0.9,id;q=0.8",
	"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
	"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
	"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
	}).then(res => {
 ch = cheerio.load(res.data)
 result = {
	status: res.status,
	result: {
nowm: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
wm: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
	}
}
resolve(result)
}).catch(reject)
}).catch(reject)
})
}

//Tiktok Music
async function tiktokmusic(URL) {
return new Promise(async (resolv, rejec) => {
GDF = await axios.get('https://www.tiktok.com')
Cookie = GDF.headers['set-cookie'].join('')
axios.get(URL, {
headers: {
'user-agent': UserAgent(),
'Cookie': Cookie
}
})
.then(({ data }) => {
var $ =  cheerio.load(data)
ttdata = JSON.parse($$('script#__NEXT_DATA__').get()[0].children[0].data)
meta = ttdata.props.pageProps.itemInfo.itemStruct
resolv({
status: true,
message: success,
result: {
description: meta.desc,
duration: meta.video.duration,
resolution: meta.video.width + 'x' + meta.video.height,
jpeg_thumb: meta.video.originCover,
gif_thumb: meta.video.dynamicCover,
audio: meta.music.playUrl,
}
})
})
.catch((response) => {
rejec({ status: false, message: response })
})
})
}
//Github Stalk
function ghstalk(username) {
url  = `https://api.github.com/users/${username}`; 
return axios.get(url)
.then(data => {
return data.data
})
}

//Telegraph
function telegra(media)  {
return new Promise(async (resolve, reject) => {
try {
let { ext } = await fromBuffer(media)
let form = new FormData()
form.append('file', media, 'tmp.' + ext)
await fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(res => res.json())
.then(res => {
if (res.error) return reject(res.error)
resolve('https://telegra.ph' + res[0].src)
})
.catch(err => reject(err))
} catch (e) {
return console.log(e)
}
})
}
//Youtube Audio
function yta(url) {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url)
url = 'https://youtu.be/' + ytId[1]
post('https://www.y2mate.com/mates/en60/analyze/ajax', {
url,
q_auto: 0,
ajax: 1
})
.then(res => res.json())
.then(res => {
let document = (new JSDOM(res.result)).window.document
let type = document.querySelectorAll('td')
let filesize = type[type.length - 10].innerHTML
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
let thumb = document.querySelector('img').src
let title = document.querySelector('b').innerHTML

post('https://www.y2mate.com/mates/en60/convert', {
type: 'youtube',
_id: id[1],
v_id: ytId[1],
ajax: '1',
token: '',
ftype: 'mp3',
fquality: 128
})
.then(res => res.json())
.then(res => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
resolve({
audio: /<a.+?href="(.+?)"/.exec(res.result)[1],
thumb,
title,
filesizeF: filesize,
filesize: KB
})
}).catch(reject)
}).catch(reject)
} else reject('URL UNVAILD !!')
})
}

//Youtube Video
function ytv(url) {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url)
url = 'https://youtu.be/' + ytId[1]
post('https://www.y2mate.com/mates/en60/analyze/ajax', {
url,
q_auto: 0,
ajax: 1
})
.then(res => res.json())
.then(res => {
document = (new JSDOM(res.result)).window.document
yaha = document.querySelectorAll('td')
filesize = yaha[yaha.length - 23].innerHTML
id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
thumb = document.querySelector('img').src
title = document.querySelector('b').innerHTML

post('https://www.y2mate.com/mates/en60/convert', {
type: 'youtube',
_id: id[1],
v_id: ytId[1],
ajax: '1',
token: '',
ftype: 'mp4',
fquality: 360
})
.then(res => res.json())
.then(res => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
resolve({
dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
thumb,
title,
filesizeF: filesize,
filesize: KB
})
}).catch(reject)
}).catch(reject)
} else reject('URL INVALID')
})
}   

async function gempa() {
	try{
	var link = await axios.get(`https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg`)
	var $ =  cheerio.load(link.data)
	let hasil = []
	$('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody').each(function (a, b) {
	$(b).find('tr').each(function (c, d) {
	let tanggal = $(d).find('td:nth-child(2)').text().trim()
	let koordinat = $(d).find('td:nth-child(3)').text().trim()
	let magnitudo = $(d).find('td:nth-child(4)').text().trim()
	let kedalaman = $(d).find('td:nth-child(5)').text().trim()
	let skala = $(d).find('td:nth-child(6) > a').text().trim()
	const data = {
author: 'Ivanzz',
status: link.status,
result: {
	tanggal: tanggal,
	koordinat: koordinat,
	getaran: magnitudo,
	kedalaman: kedalaman,
	skala: skala
}
	}
	hasil.push(data)
})
	})
	return hasil
} catch (err) {
	var notFond = {
author: 'Ra bot',
status: link.status,
Pesan: 'ERROR 404 NOT FOUND'
	}
	return notFond
}
}

//Lirik lagu
async function lirik(querry) {
	try{
	var link = await axios.get(`https://www.musixmatch.com/search/${querry.toLocaleLowerCase()}`)
	const c = cheerio.load(link.data)
	let a = c('#search-all-results').find('div.main-panel > div:nth-child(1) > div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href');
	let thumb = c('#search-all-results').find('div.main-panel > div:nth-child(1) > div.box-content > div > ul > li > div > div.media-card-picture > img').attr('srcset')
	let Link = await axios.get(`https://www.musixmatch.com${a}`)
	var $ =  cheerio.load(Link.data)
	let lirik = $('#site > div > div > div > main > div > div > div.mxm-track-lyrics-container').find('div.container > div > div > div > div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > div > p > span').text().trim()
	let judul = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim()
	let penyanyi = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h2 > span > a').text().trim()
	var result = {
author: 'Ivanzz',
status: Link.status,
result: {
	judul: judul.replace('Lyrics', ''),
	penyanyi: penyanyi,
	Sticker: thumb.split(' 320w')[0],
	lirik: lirik
}
	}  
	} catch(e) {
	 console.log(e)
	}
}

//Emoji 
async function emoji(emoticon) {
	const emojii = encodeURI(`${emoticon}`)
	var link = await axios.get(`https://emojipedia.org/${emojii}/`)
	var $ =  cheerio.load(link.data)
	var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var softbank = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var docomo = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var KDDI = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	const result = {
apple: apple.replace('120', '240'),
google: google.replace('120', '240'),
samsung: samsung.replace('120', '240'),
microsoft: microsoft.replace('120', '240'),
whatsapp: whatsapp.replace('120', '240'),
twitter: twitter.replace('120', '240'),
facebook: facebook.replace('120', '240'),
jooxPixel: jooxpixel.replace('120', '240'),
openemoji: openmoji.replace('120', '240'),
emojidex: emojidex.replace('120', '240'),
messanger: messager.replace('120', '240'),
LG: LG.replace('120', '240'),
HTC: HTC.replace('120', '240'),
mozilla: mozilla.replace('120', '240'),
softbank: softbank.replace('120', '240'),
docomo: docomo.replace('120', '240'),
KDDI: KDDI.replace('120', '240')
	}
	return result
}

//cuaca
async function cuaca(daerah) {
 try {
	var link = await axios.get(`https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg${Cuaca(daerah)}`)
	var $ = cheerio.load(link.data)
	let hasil = []
	$('#TabPaneCuaca2 > div.table-responsive > table > tbody').each(function (a, b) {
$(b).find('tr').each(function (c, d) {
	let nama = $(d).find('td > a').text().trim()
	let cuaca = $(d).find('td > span').text().trim()
	let suhu = $(d).find('td:nth-child(6)').text().trim()
	let kelembapan = $(d).find('td:nth-child(7)').text().trim()
	let data = {
daerah: nama,
cuaca: cuaca,
suhu: suhu + ' °C',
kelembapan: kelembapan + '%'
	}
	hasil.push(data)
})
	})
	return hasil
} catch (err) {
	var notFond = {
author: 'Ivanzz',
status: link.status,
Pesan: 'Not Found'
	}
	return notFond
}
}

//Covid
async function covid() {
res = await axios.get(`https://www.worldometers.info/coronavirus/country/indonesia/`) 
var $ = cheerio.load(res.data)
hasil = []
a = $('div#maincounter-wrap')
kasus = $(a).find('div > span').eq(0).text()
kematian = $(a).find('div > span').eq(1).text() 
sembuh = $(a).find('div > span').eq(2).text() 
hasil.push({ kasus, kematian, sembuh}) 
return hasil
}

//ytstalk
async function ytstalk(username) {
	const browsers = await puppeter.launch();
	const page = await browsers.newPage();
	await page.goto(`https://www.youtube.com/results?search_query=${username}`);
	await page.waitForTimeout(3000)
	const bodyHandler = await page.$('body');
	const html = await page.evaluate(body => body.innerHTML, bodyHandler);
	await bodyHandler.dispose();
	await browsers.close();
	var $ = cheerio.load(html);
	let id = $('#main-link').attr('href')
	let youtube = 'https://www.youtube.com'+ id + '/about'
	const browser = await puppeter.launch();
	const site = await browser.newPage();
	await site.goto(youtube)
	await site.waitForTimeout(3000)
	const bodyHandling = await site.$('body');
	const htmldata = await site.evaluate(body => body.innerHTML, bodyHandling);
	await bodyHandling.dispose();
	await browser.close();
	const c = cheerio.load(htmldata)
	let nickname = c('#text').text().trim()
	let subcriber = c('#subscriber-count').text().trim()
	let join = c('#right-column').find('yt-formatted-string:nth-child(2) > span:nth-child(2)').text().trim()
	let viewers = c('#right-column').find(' yt-formatted-string:nth-child(3)').text().trim()
	let thumb = c('#img').attr('src');
	let desc = c('#description').text().trim()
	let result = {
	 author: 'Ivanzz',
username: nickname.replace('Skip navigationSign in', ''),
subcriber: subcriber,
bergabung: join,
penonton: viewers,
thumb: thumb,
desk: desc
	}
	return result
}

//mediafire
async function mediafire(url) {
let query = await axios.get(url) 
let cher = cheerio.load(query.data)
let hasil = []
let link = cher('a#downloadButton').attr('href')
let size = cher('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace(' ', '')
let split = link.split('/')
let aurhor = 'Ivanzz'
let nama = seplit[5]
let mime = nama.split('.')
mime = mime[1]
hasil.push({ author, nama, mime, size, link })
return hasil
}



module.exports.tiktok = tiktok
module.exports.tiktokmusic = tiktokmusic
module.exports.ghstalk = ghstalk
module.exports.telegraph = telegra
module.exports.yta = yta
module.exports.ytv = ytv
module.exports.Gempa = gempa
module.exports.litik = lirik
module.exports.emoji = emoji
module.exports.cuaca = cuaca
module.exports.ytstalk = ytstalk
module.exports.mediafire = mediafire
module.exports.covid = covid
