// server.js

// 1. Import necessary libraries
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config(); // This loads environment variables from a .env file

// 2. Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Middleware to serve static files (your front-end)
// This serves index.html and app.js from a 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Allows parsing JSON bodies from the front-end

// 4. Securely get the Gemini API Key from the environment variables
const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
  console.error('GEMINI_API_KEY is not set in the .env file.');
  process.exit(1);
}

// 5. Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(geminiApiKey);

// 6. Create a secure API endpoint for your front-end to call
app.post('/api/gemini', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Send the response back to the front-end
    res.json({ text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'Failed to get response from Gemini API.' });
  }
});

// 7. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});