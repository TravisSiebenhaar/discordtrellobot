import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import { Client } from "discord.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.head("/", (req, res) => {
  console.log("head requested");
  res.status(200);
  res.send("success");
});

app.post("/", (req, res) => {
  const res = req.body.action.display;
  if (res.translationKey == "action_move_card_from_list_to_list") {
    const channel = client.channels.cache.get("930564307547197494");
    channel.send(
      `${res.memberCreator.text} moved card from ${res.listBefore.text} to ${res.listAfter.text}`
    );
  } else {
    console.log("did NOT register card moving from list to list");
  }

  res.status(200);
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
