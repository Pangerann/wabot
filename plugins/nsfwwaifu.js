let fetch = require("node-fetch");
let handler = async (m, { conn }) => {
  let res = await fetch(global.API("https://api.waifu.pics/", "/nsfw/waifu"));
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.url)
    conn.sendFile(
      m.chat,
      json.url,
      "bokepkartun",
      "sange kok sama kartun, stress...",
      m
    );
  else throw json;
};
handler.help = ["nsfwwaifu", "waifunsfw"];
handler.tags = ["fun"];

handler.command = /^(nsfwwaifu|waifunsfw)$/i;

handler.premium = true;
handler.limit = true;

module.exports = handler;
