import ArrowLeft from "../../components/ui/ArrowLeft";
import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import VisaImage from "../../assets/icons/brandico_visa.svg";
import MasterCardImage from "../../assets/icons/logos_mastercard.svg";
import PaypalImage from "../../assets/icons/cib_cc-paypal.svg";
import ApplePayImage from "../../assets/icons/logos_apple-pay.svg";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [selectedPayments, setSelectedPayments] = useState({
    applePay: false,
    paypal: false,
  });

  const togglePayment = (paymentType: "applePay" | "paypal") => {
    setSelectedPayments((prev) => ({
      applePay: paymentType === "applePay" ? !prev.applePay : false,
      paypal: paymentType === "paypal" ? !prev.paypal : false,
    }));
  };

  const handleCardClick = (type: "visa" | "mastercard") => {
    navigate("/emptyCards", { state: { type } });
  };

  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <ArrowLeft title={"Payment Method"} />

      <div className="py-6 px-4">
        <h2 className="text-lg font-medium text-shadow-Background-Secondary-Defult mb-4">
          Credit / Debit Card
        </h2>
        <div className="space-y-3">
          <div
            onClick={() => handleCardClick("visa")}
            className="flex items-center justify-between p-4 bg-Background-Neutral-Lightest cursor-pointer rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div>
                <img className="w-8" src={VisaImage} alt="Visa card" />
              </div>
              <span className="text-shadow-Background-Secondary-Defult font-medium">
                VISA
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* MasterCard Option */}
          <div
            onClick={() => handleCardClick("mastercard")}
            className="flex items-center justify-between p-4 bg-Background-Neutral-Lightest cursor-pointer rounded-lg"
          >
            <div className="flex items-center gap-3">
              {/* MasterCard Logo */}
              <div>
                <img src={MasterCardImage} alt="Master Card" />
              </div>
              <span className="text-shadow-Background-Secondary-Defult font-medium">
                MasterCard
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Wallets Section */}
      <div className="px-4">
        <h2 className="text-base font-medium text-shadow-Background-Secondary-Defult mb-4">
          Mobile Wallets
        </h2>
        <div className="space-y-3">
          {/* Apple Pay Option */}
          <div
            className="flex items-center justify-between p-4 bg-Background-Neutral-Lightest rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => togglePayment("applePay")}
          >
            <div className="flex items-center gap-3">
              {/* Apple Pay Logo */}
              <div>
                <img src={ApplePayImage} alt="Apple Pay" />
              </div>
              <span className="text-shadow-Background-Secondary-Defult font-medium">
                Apple Pay
              </span>
            </div>
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                selectedPayments.applePay ? "bg-Success-Defult" : "bg-gray-300"
              }`}
            >
              {selectedPayments.applePay && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
          </div>

          {/* PayPal Option */}
          <div
            className="flex items-center justify-between p-4 bg-Background-Neutral-Lightest rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => togglePayment("paypal")}
          >
            <div className="flex items-center gap-3">
              {/* PayPal Logo */}
              <div>
                <img src={PaypalImage} alt="Paypal" />
              </div>
              <span className="text-shadow-Background-Secondary-Defult font-medium">
                PayPal
              </span>
            </div>
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${
                selectedPayments.paypal ? "bg-Success-Defult" : "bg-gray-300"
              }`}
            >
              {selectedPayments.paypal && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
