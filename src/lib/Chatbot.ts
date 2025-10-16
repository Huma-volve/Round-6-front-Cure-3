// لو عاوز تستخدم OpenAI API حقيقي
const getAIResponse = async (userMessage: string) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          // إضافة أي parameters تانية محتاجها
        }),
      });
  
      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Error calling AI API:', error);
      return "I'm sorry, I'm having trouble responding right now. Please try again later.";
    } finally {
      setIsLoading(false);
    }
  };