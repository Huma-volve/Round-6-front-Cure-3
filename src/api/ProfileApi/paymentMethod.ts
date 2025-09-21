import api from "./api";

export const getCardsPayment = async (type?: "visa" | "mastercard") => {
  try {
    const response = await api.get(`cards`, {
      params: type ? { type } : {},
    });
    return response.data.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const addNewCard = async (cardData: {
  card_token: string;
  holder_name: string;
}) => {
  try {
    const response = await api.post(`cards`, cardData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
