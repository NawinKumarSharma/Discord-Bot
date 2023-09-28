import { Client, GatewayIntentBits } from "discord.js";
import { getRandomJoke } from "./jokes.js";

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

client.login(
  "MTE1NjQ0MTIxODg1NTc0MzU54dsx3Mw.GQ8oCd.6qY7us1yi2sBVW5ssUjqpfINCx1DSxJ-5dthbS8"
  //you need to use your own token . 
)