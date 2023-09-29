import { REST, Routes } from "discord.js";

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
    await rest.put(Routes.applicationCommands("115896441218855743573"), { body: commands });
    console.log("Started relaoded application (/) commands.");

  } catch (error) {
    console.log(error);
  }
})();