import api from "./api";

type PasswordAccount = {
    password: string;
};

export const deleteAccount = async (passwordData: PasswordAccount) => {
    const formData = new FormData();
    formData.append("password", passwordData.password);
    const response = await api.post("delete_account", formData);
    return response;
};
