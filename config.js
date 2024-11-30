const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349055400815";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_23_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICA4MixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmNxSFJSTXltUzR2MW53RnJuTTVLemdUbGVMZ0RqOUVBRmFKc2xNaDRQST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVdzbkxxc0hRci14cDdiOGNtWDEyQVwiLFxuICBcInBob25lSWRcIjogXCJjMTA5MTQyMC0xZjc0LTRjYzgtOWQwNC1hZGIwZTBhZjJjM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTkwLFxuICAgICAgMTY5LFxuICAgICAgMTM0LFxuICAgICAgMyxcbiAgICAgIDIyMixcbiAgICAgIDE5NyxcbiAgICAgIDI1NSxcbiAgICAgIDIxOCxcbiAgICAgIDMwLFxuICAgICAgNTgsXG4gICAgICAxNjIsXG4gICAgICAxMTUsXG4gICAgICAyMyxcbiAgICAgIDIyNCxcbiAgICAgIDE1NyxcbiAgICAgIDI4LFxuICAgICAgMTM2LFxuICAgICAgMTQ4LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDIxMCxcbiAgICAgIDIxLFxuICAgICAgNDQsXG4gICAgICAyMzAsXG4gICAgICAzMCxcbiAgICAgIDE1NixcbiAgICAgIDEyMixcbiAgICAgIDUzLFxuICAgICAgMjQ3LFxuICAgICAgMTMyLFxuICAgICAgMTIsXG4gICAgICAxODEsXG4gICAgICA4MyxcbiAgICAgIDQwLFxuICAgICAgMTU5LFxuICAgICAgMTIxLFxuICAgICAgMyxcbiAgICAgIDIxMyxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURExHSkxTVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1NTQwMDgxNTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTI1MTk2Nzk1MDk4Njo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012WDQvRUdFSXpQcTdvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNFFRWWduRGI0aTE0clpwUDBJOWhYeFJ4RGVNYWxtOUoveW1BTWgrOVNUaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMWXEvY250NzUrYjFLKzJDc2hHSTFSMUZVT3NHbUFzRllvT25XMVRGRmZaSXd6ck1UeTlGMDVmTWpuaUFqMStDOHMvTVAzTllBMEtkNzNaRmJ5SmpEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxUWxKUkNITHZQWmhWZ0F0eDRIUXVsZExXOHllc0RiZjkyQVorSzFxZzZHY3JnYjQ1RFVqK3lWdFJDcHJ1dUxUTENUWXVhMkp5MmdpQ1lVMG5oRkppdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU1NDAwODE1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjk2MjE5MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
