import dotenv from "dotenv";
import { REST, Routes } from "discord.js";

dotenv.config();

const commands = [
  {
    name: "ping",
    description: 'Replies with Pong!',
  },
];
const rest = new REST({ version: '10' });

rest.setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands("1156441218238557435"), { body: commands });
    console.log("Started relaoded application (/) commands.");

  } catch (error) {
    console.log(error);
  }
})();