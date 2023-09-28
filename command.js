import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: 'Replies with Pong!',
  },
];
const rest = new REST({ version: '10' });
rest.setToken(
  "MTE1NjQ0MTIxODg1NTc0MzU54dsx3Mw.GQ8oCd.6qY7us1yi2sBVW5ssUjqpfINCx1DSxJ-5dthbS8"
);
//you need to use your own token . 
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands("115896441218855743573"), { body: commands });
    console.log("Started relaoded application (/) commands.");

  } catch (error) {
    console.log(error);
  }
})();