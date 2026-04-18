// AI_DISABLED - To re-enable the AI Assistant, comment back in the following code:
/*
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { db } from "../../firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import AIChatButton from "./AIChatButton";
import AIChatWindow from "./AIChatWindow";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState(() => {
    const saved = localStorage.getItem("ai_chat_id");
    if (saved) return saved;
    const newId = `chat_${Date.now()}`;
    localStorage.setItem("ai_chat_id", newId);
    return newId;
  });

  // Fetch / Sync messages from Firestore
  useEffect(() => {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => doc.data());
      setMessages(msgs);
      
      // Add welcome message if empty
      if (msgs.length === 0) {
        setMessages([{
          text: "Hi! I'm your AI assistant. Ask me anything about this portfolio or the projects listed here!",
          sender: "ai",
          timestamp: new Date()
        }]);
      }
    });

    return () => unsubscribe();
  }, [chatId]);

  const handleSendMessage = async (text) => {
    setIsLoading(true);
    
    try {
      // 1. Save user message to Firestore
      const messagesRef = collection(db, "chats", chatId, "messages");
      await addDoc(messagesRef, {
        text,
        sender: "user",
        timestamp: serverTimestamp(),
      });

      // 2. Call Firebase Cloud Function
      const functions = getFunctions();
      const getAIResponse = httpsCallable(functions, "getAIResponse");
      
      const result = await getAIResponse({ 
        message: text,
        history: messages.slice(-5) // Send last 5 messages for context
      });

      // 3. Save AI response to Firestore
      await addDoc(messagesRef, {
        text: result.data.response,
        sender: "ai",
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("AI Communication Error:", error);
      // Fallback local message
      setMessages(prev => [...prev, {
        text: "I'm having trouble connecting to the AI brain right now. Please ensure your Cloud Functions are deployed!",
        sender: "ai",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AIChatButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <AIChatWindow
            messages={messages}
            onSendMessage={handleSendMessage}
            onClose={() => setIsOpen(false)}
            isLoading={isLoading}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
*/

// Minimal dummy export to prevent import errors if not commented out elsewhere
const AIAssistant = () => null;
export default AIAssistant;
