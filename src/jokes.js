import axios from "axios";

export const getRandomJoke = async () => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?category=Miscellaneous&type=single');
    return response.data.joke;
  } catch (error) {
    console.error('Error fetching Chuck Norris joke:', error);
    return null;
  }
}
