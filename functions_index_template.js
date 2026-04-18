const functions = require("firebase-functions");
const { OpenAI } = require("openai");

// Initialize OpenAI with your secret API key
// This key is set via: firebase functions:secrets:set OPENAI_API_KEY="..."
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getAIResponse = functions.runWith({ secrets: ["OPENAI_API_KEY"] }).https.onCall(async (data, context) => {
  const { message, history } = data;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional AI assistant for a developer's portfolio. You are helpful, concise, and knowledgeable about web development. Answer questions about the user's projects and skills based on the context of this portfolio.",
        },
        ...history.map(msg => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text
        })),
        { role: "user", content: message },
      ],
      max_tokens: 300,
    });

    return {
      response: completion.choices[0].message.content,
    };
  } catch (error) {
    console.error("OpenAI Error:", error);
    throw new functions.https.HttpsError("internal", "Failed to get response from AI");
  }
});
