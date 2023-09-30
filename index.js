import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { getRandomJoke } from "./src/jokes.js"

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hi from BOT",
  })
})

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!joke') {
    const joke = await getRandomJoke();

    if (joke) {
      message.reply({
        content: `Here's a Chuck Norris joke for you:\n${joke}`,
      });
    } else {
      message.reply({
        content: 'Sorry, I couldn\'t fetch a joke at the moment. Try again later.',
      });
    }
  }
});

client.on('interactionCreate', (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!");
})

client.login(process.env.DISCORD_TOKEN);