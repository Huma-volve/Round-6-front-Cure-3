import ArrowLeft from "@/components/ui/ArrowLeft";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import VisaLogo from "../../assets/icons/visaLogo.svg";
import Spenny from "../../assets/icons/companyLogo.svg";
import MasterCardLogo from "../../assets/icons/logos_mastercard.svg";
import { useContext, useState } from "react";
import { UserContext } from "@/context/Mohamed/user-context";
import { addNewCard } from "@/api/ProfileApi/paymentMethod";
import toast from "react-hot-toast";

const AddNewCard = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const location = useLocation();
  const { type } = location.state as { type: "visa" | "mastercard" };
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardType: type,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const validateForm = () => {
    if (!formData.cardholderName.trim()) {
      setError("Please enter cardholder name");
      return false;
    }
    if (!formData.cardNumber.replace(/\s/g, "")) {
      setError("Please enter card number");
      return false;
    }
    if (!formData.expiryMonth || !formData.expiryYear) {
      setError("Please enter expiry date");
      return false;
    }
    if (!formData.cvv) {
      setError("Please enter CVV code");
      return false;
    }
    return true;
  };

  const handleSaveCard = async () => {
    setError("");
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);

    try {
      const cardData = {
        card_token:
          formData.cardType === "mastercard" ? "tok_mastercard" : "tok_visa",
        holder_name: formData.cardholderName,
      };
      const response = await addNewCard(cardData);
      toast.success(response.message + "🎉", {
        style: {
          backgroundColor: "#70BF73",
          color: "#fff",
          padding: "10px",
        },
      });
      navigate("/paymentMethod");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to add card. Please try again.";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <ArrowLeft title={"Add New Card"} />

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Credit Card Visual */}
        <div className="mb-8">
          <div className="relative w-full max-w-sm mx-auto">
            {/* Card */}
            <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className=" bg-opacity-20 rounded px-2 py-1">
                    <img src={Spenny} alt="Spenny Logo" />
                  </div>
                </div>
                <div className="text-white font-bold text-lg">
                  <img
                    src={
                      formData.cardType === "visa" ? VisaLogo : MasterCardLogo
                    }
                    alt={`${formData.cardType} Logo`}
                  />
                </div>
              </div>

              {/* Card Number */}
              <div className="mb-6">
                <div className="text-xl font-mono tracking-wider">
                  {formData.cardNumber || "6789 4567 5432 8903"}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-white text-opacity-80 mb-1">
                    {formData.cardholderName || user?.name}
                  </div>
                </div>
                <div className="text-sm">
                  {formData.expiryMonth && formData.expiryYear
                    ? `${formData.expiryMonth}/${formData.expiryYear}`
                    : "12/22"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Cardholder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Cardholder Name"
              value={formData.cardholderName}
              onChange={(e) =>
                handleInputChange("cardholderName", e.target.value)
              }
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
          </div>
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                type={showCard ? "text" : "password"}
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={(e) =>
                  handleInputChange(
                    "cardNumber",
                    formatCardNumber(e.target.value)
                  )
                }
                maxLength={19}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors pr-12"
              />
              {showCard ? (
                <Eye
                  onClick={() => setShowCard(!showCard)}
                  className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
              ) : (
                <EyeClosed
                  onClick={() => setShowCard(!showCard)}
                  className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
              )}
            </div>
          </div>

          {/* Expiry Date and CVV */}
          <div className="grid grid-cols-2 gap-4">
            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM"
                  value={formData.expiryMonth}
                  onChange={(e) =>
                    handleInputChange("expiryMonth", e.target.value)
                  }
                  maxLength={2}
                  className="w-full px-3 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-center"
                />
                <input
                  type="text"
                  placeholder="YY"
                  value={formData.expiryYear}
                  onChange={(e) =>
                    handleInputChange("expiryYear", e.target.value)
                  }
                  maxLength={2}
                  className="w-full px-3 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-center"
                />
              </div>
            </div>

            {/* CVV Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV Code
              </label>
              <input
                type="text"
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
                maxLength={3}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-12">
          <Button
            onClick={handleSaveCard}
            disabled={isLoading}
            className="w-full bg-Background-Primary-Defult hover:text-Text-Primary-Defult border hover:border-Border-Primary-Defult hover:bg-transparent text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
