import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

// Types
interface Message {
  role: 'user' | 'model';
  content: string;
}

interface GeminiResponse {
  candidates?: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
  promptFeedback?: {
    blockReason?: string;
  };
  error?: {
    message: string;
  };
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      content: "Hi! I'm your AI assistant. How can I help you today?" 
    }
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages: Message[] = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const API_KEY = 'AIzaSyDISrMm__ltlAaTuV-IBS8xlIWiX58F4NQ';
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: input
                  }
                ]
              }
            ],
            generationConfig: {
              maxOutputTokens: 150,
              temperature: 0.7,
            }
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response Error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: GeminiResponse = await response.json();
      
      // استخراج الرد بشكل آمن مع Optional Chaining
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        const aiReply = data.candidates[0].content.parts[0].text;
        setMessages([...newMessages, { role: 'model', content: aiReply }]);
      } 
      // إذا كان فيه خطأ في الـ API
      else if (data?.promptFeedback?.blockReason) {
        const blockReason = data.promptFeedback.blockReason;
        throw new Error(`Content blocked due to: ${blockReason}`);
      }
      // إذا كان فيه error من الـ API
      else if (data?.error) {
        throw new Error(data.error.message || 'API error occurred');
      }
      else {
        throw new Error('Unexpected response format from API');
      }

    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      let errorMessage = "I'm sorry, I'm having trouble responding right now. ";
      
      if (error instanceof Error) {
        if (error.message.includes('401') || error.message.includes('403')) {
          errorMessage += "Please check your API key.";
        } else if (error.message.includes('404')) {
          errorMessage += "The model endpoint was not found.";
        } else if (error.message.includes('blocked')) {
          errorMessage += "Your message was blocked for safety reasons.";
        } else if (error.message.includes('quota') || error.message.includes('429')) {
          errorMessage += "API quota exceeded. Please try again later.";
        } else {
          errorMessage += "Please try again later.";
        }
      }
      
      setMessages([...newMessages, { role: 'model', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (): string => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickSuggestions: string[] = ["Hello!", "How are you?", "What can you do?", "Tell me a joke"];

  return (
    <div className="flex flex-col h-[600px] bg-dark-2 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
      
      {/* Chat Header */}
      <div className="bg-dark-3 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-electric-400 to-electric-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">AI Assistant</h3>
            <p className="text-electric-400 text-sm">Online • Powered by Gemini Pro</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-dark-1">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
              
              {/* Avatar */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === 'user' 
                  ? 'bg-gradient-to-r from-gray-600 to-gray-500 ml-2' 
                  : 'bg-gradient-to-r from-electric-400 to-electric-600 mr-2'
              }`}>
                {message.role === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Message Bubble */}
              <div className={`rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-electric-500 text-white rounded-br-none'
                  : 'bg-dark-3 text-gray-100 rounded-bl-none border border-gray-700'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.role === 'user' ? 'text-electric-100' : 'text-gray-400'
                }`}>
                  {formatTime()}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2 max-w-[80%]">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-400 to-electric-600 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-dark-3 text-gray-100 rounded-2xl rounded-bl-none px-4 py-3 border border-gray-700">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-800 bg-dark-2 p-4">
        <div className="flex space-x-3">
          <div className="flex-1">
            <input
              type="text"
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="w-full bg-dark-3 border border-gray-700 rounded-full px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-electric-400 focus:ring-2 focus:ring-electric-400/20 transition-all duration-200"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="bg-electric-500 hover:bg-electric-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-full p-3 transition-all duration-200 transform hover:scale-105 disabled:transform-none"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {/* Quick Suggestions */}
        <div className="flex flex-wrap gap-2 mt-3">
          {quickSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              disabled={isLoading}
              className="bg-dark-3 hover:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-500 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700 transition-all duration-200 disabled:cursor-not-allowed"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;