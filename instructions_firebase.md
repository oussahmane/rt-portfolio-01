# Firebase AI Assistant Setup Guide

Follow these steps to enable the AI functionality in your portfolio.

## 1. Initialize Firebase Functions
In your project root directory, run:
```bash
firebase init functions
```
- Select **JavaScript** or **TypeScript** (this guide uses JavaScript).
- Choose **"No"** for ESLint if you want a faster setup.
- Run `npm install` inside the `functions` folder.

## 2. Install OpenAI Dependency
Navigate to the `functions` directory and install the OpenAI SDK:
```bash
cd functions
npm install openai
```

## 3. Deploy Cloud Function Code
Replace the content of `functions/index.js` with the provided AI Function code (see next artifact).

## 4. Set OpenAI API Key (Securely)
Run the following command in your root directory to store your API key securely:
```bash
firebase functions:secrets:set OPENAI_API_KEY="your_openai_api_key_here"
```

## 5. Deploy to Firebase
Deploy your functions and hosting together:
```bash
firebase deploy
```

---

## 🔥 Cloud Function Configuration
The frontend is already configured to call the `getAIResponse` function. Ensure your `firebase.js` correctly initializes the functions service:

```javascript
import { getFunctions } from "firebase/functions";
// ...
const functions = getFunctions(app);
export { ..., functions };
```
> [!NOTE]
> I have already updated your `AIAssistant.jsx` to use these services.
