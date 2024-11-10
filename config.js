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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_03_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTlBpVUZ6U2k4c0xiOHEydlpwaGE5bzcwSVJFWDcyY1A2SDlrRkd0RWdIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQkFJWGlVTElURS0xQlJFMVV0QlZEUVwiLFxuICBcInBob25lSWRcIjogXCI0ZDcxOGZjMS0wMzI5LTRhZWQtYTZlMi1iNGQzMTI5MTk5NTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgNjEsXG4gICAgICA5MyxcbiAgICAgIDUxLFxuICAgICAgMTMyLFxuICAgICAgMjcsXG4gICAgICA0NCxcbiAgICAgIDE3OCxcbiAgICAgIDEwOSxcbiAgICAgIDE2NyxcbiAgICAgIDExNSxcbiAgICAgIDE0LFxuICAgICAgMTc2LFxuICAgICAgMTI4LFxuICAgICAgMzEsXG4gICAgICAxODcsXG4gICAgICAyNixcbiAgICAgIDExNyxcbiAgICAgIDE3MCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxMjAsXG4gICAgICAxNDYsXG4gICAgICAxNjMsXG4gICAgICAxODIsXG4gICAgICAxNDYsXG4gICAgICA0MSxcbiAgICAgIDQzLFxuICAgICAgMjU1LFxuICAgICAgODEsXG4gICAgICAxOTksXG4gICAgICA3OSxcbiAgICAgIDE1MCxcbiAgICAgIDE2LFxuICAgICAgMTA2LFxuICAgICAgMjA4LFxuICAgICAgNzksXG4gICAgICAxNjQsXG4gICAgICAyMTMsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlE5NVlHTUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTU0MDA4MTU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEyNTE5Njc5NTA5ODY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNclg0L0VHRUlHL3hMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRRUVlnbkRiNGkxNHJacFAwSTloWHhSeERlTWFsbTlKL3ltQU1oKzlTVGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZVh0NVBXYTFPV1ZTU3RLVDAvNVRDVVpkMExuSTd1UUVEQmNRUDgvd2k3SFduSmp3blA1K0NiNTJxRXJUMCt1dUQ2eUQwSTdDSzI5ekZEdFQ1NjRnQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVkRZaW0zZm5jWTIrdE9UZ1RBS29LcnhRWDVDekp5b1pKYXI5bjhxcnlaKzVVeitSUS9MSG8vMFBXcDdHekc4UVF6ZlBFd09jYXVyYlhINVpPSHQ2QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA1NTQwMDgxNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNzI1ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFVFFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVUUS5qc29uIjogIntcImtleURhdGFcIjpcIjh6MlcxYlU1RVZKMitKeUhwcWZRdFZ6cmlxSk5wdld6d1RtMTBnNE1yOFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0OTIyNDEzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTIzODYzNzA2NVwifSIKfQ=="  // PUT your SESSION_ID 


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
