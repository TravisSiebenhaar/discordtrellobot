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
  console.log("req: ", req.body.action.display);
  const display = req.body.action.display;
  if (display.translationKey == "action_move_card_from_list_to_list") {
    console.log("registered card did move from list to list.");
    const channel = client.channels.cache.get("930564307547197494");
    channel.send(
      `${display.entities.memberCreator.text} moved a card from ${display.entities.listBefore.text} to ${display.entities.listAfter.text}`
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
