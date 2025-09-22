import api from "./api";

export const getPrivacyPolice = async () => {
    const response = await api.get(`pages/terms-and-conditions`);
    return response.data.data;
};
