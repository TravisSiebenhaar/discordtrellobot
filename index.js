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
  res.status(200);
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
