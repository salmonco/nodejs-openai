require("dotenv").config();
const router = require("express").Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const callGpt35 = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0].message;
  } catch (error) {
    console.error("callGpt35() error >>> ", error);
    return null;
  }
};

router.post("/", async (req, res) => {
  const prompt = req.body.prompt;
  const response = await callGpt35(prompt);

  if (response) {
    res.json({ response, status: true });
  } else {
    res.status(500).json({ status: false });
  }
});

module.exports = router;
