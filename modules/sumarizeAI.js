const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey
});
const openai = new OpenAIApi(configuration);



async function summarizeAI(content) {
  const prompt = `Create a summary in the following structure: Provide a list summary of topics followed by the summary of each topic and a conclusion of the most important aspects of the text. Summarize the following text:\n${content}.`;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1000,
    });
    const summary = response.data.choices[0].text.trim();
    return summary;
  } catch (error) {
    console.error(error);
    return 'Error summarizing content';
  }
}

module.exports = summarizeAI;