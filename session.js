//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5rbkVvOHJZRFZkcWNQT0VTS1QwdG1tV3l1SG1QUlFybjkvcVl1ZXAycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFpEY3lUQUJSZGplaTNSdjRqZzFwQStRc2tPVjJSblA2WXdGZDgzUkFoUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTmFCVWsyS3VGQlZseWw3Q3haT2EzNXJhU3RlZ0VmY3kwNVRaWmk2RlVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5REw3YUZoVHZNRVcvYmk5REFzd0tWYUJabHFZZG9xVWdxLzhEc1pZWW1jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJQk9DNU5kT1lvcUh0emlhQjlVYlhmUWRMVlI2Rlo3MFM0cWZoYnNYM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE0ZjBicEZuWFl2Vm82ckdsdGY1WWRET054N0tkQlVrM2k3YVplTEJZUW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09yalptaTNuMFBwcWx3eFlET1FXK21tYnFacFEzbUJ3dk0vcGREMS9Vcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFM3UmJ6Um92WEI0Y0tqcEtHWGEwREVyY0k5NTJwdEozYkNSK3ZYaGJXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx3Zzk5b0dDL21BRmJrbnRhL0xZUDZpTmgwSzUrZWNJU3grbEFuaTB1QlpaaDVqa2N4OTdmOUFrZDBnYWFEZzJFc0hWZDNaQXp1YXltVGd3MGRoV2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJPa0VOVDV1M3JPQTAzYnlHRTU3RWtmTUxDK3RtT2prTDRVKzI2WU5qRm9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY2ODcxNjk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc5RTFEMzU1RUU0RThENTI1RUY2RjdFRTc3REZFM0M5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcwNzQ4Njl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhPczVYWHFIU1FPTEZ2UDhhSHBvZlEiLCJwaG9uZUlkIjoiYmVjNDBlMWItOTllMS00NmJmLWE3NDgtOGViYjhmMDllOTg0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndWU0l0S3h3SngzU24yS0h2WFI1MXdiZVp5TT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTFDUDNsOFh2b05pY1UvVGpjcmoxbE8vZTE0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUdGcStRQ0VLeXI2OFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNDlGc2szdlV1cmZMeElDK0FPWTJXcm4xdGp5R3NpQVlMdmdWeGREWHEwMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZE85WjZITzNlc1V0SUk2OUZJMFZsVlVJTVc0dE8vS0t0NnhDbkpjTnhWdVZQRHlmWE10ZmFEejNKNTE1aVNGRXZEOGEreVBkbkNGbDdoT1hBU3ZGQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlY4Ri9DK0dnRVA3VHRSQ0ROM3dGWm9JT1NIdEtqK1RIVnNBZHkzMnJId1ZEYjRXaW5PbjVOV1JLQUxoS2o2ZWgzRmhlVEErNWJXbmUvRkMxR1dUR2p3PT0ifSwibWUiOnsiaWQiOiI5NDc2Njg3MTY5NTo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCTXG5cbvCdkIdcblxu8J2QgFxuXG7wnZCRXG5cbvCdkJRcblxu8J2QilxuXG7wnZCAIiwibGlkIjoiMTAxMzY2MTYwNjkxMzE4OjQ0QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Njg3MTY5NTo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUFJiSk43MUxxM3k4U0F2Z0RtTmxxNTliWThocklnR0M3NEZjWFExNnROIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTcwNzQ4NjQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzN5In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
