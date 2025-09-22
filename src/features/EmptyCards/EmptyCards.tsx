import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import CreditCard from "../../assets/images/credit-card 1.png";
import VisaImage from "../../assets/icons/brandico_visa.svg";
import MasterCardImage from "../../assets/icons/logos_mastercard.svg";
import ArrowLeft from "@/components/ui/ArrowLeft";
import { useEffect, useState } from "react";
import { getCardsPayment } from "@/api/ProfileApi/paymentMethod";
import type { PaymentCard } from "@/types/Mohamed/Profile";
import Loading from "@/Layout/Common/Loading";

const EmptyCards = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { type } = location.state || {};
  const [selectedPayments, setSelectedPayments] = useState<string | null>(null);

  const [cards, setCards] = useState<PaymentCard[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const res = await getCardsPayment(type);
        setCards(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (type) fetchCards();
  }, [type]);

  return (
    <>
      <div className="max-w-6xl mx-auto h-screen">
        <ArrowLeft title={"Payment Method"} />

        <div className="flex flex-col justify-between h-11/12">
          <div className="flex flex-col h-full px-4 pt-8">
            {cards && cards.length > 0 ? (
              <div className="flex-1">
                <div className="space-y-4 mb-8">
                  {cards.map((card, index) => (
                    <div
                      key={card.id || index}
                      className="flex items-center justify-between p-4 bg-Background-Neutral-Lightest rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      <div
                        onClick={() => setSelectedPayments(card.id)}
                        className="flex items-center gap-4"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={
                              card.brand === "visa"
                                ? VisaImage
                                : MasterCardImage
                            }
                            alt={`${card.brand} Card`}
                            className="w-14 h-9 object-contain"
                          />
                        </div>
                        <div className="flex items-center justify-center font-medium text-Text-Secondary-Defult text-lg">
                          <p>
                            {card.card_holder_name}{" "}
                            <span>**** **** **** {card.last_four}</span>
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => setSelectedPayments(card.id)}
                        className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${
                          selectedPayments === card.id
                            ? "bg-Success-Defult"
                            : "bg-gray-300"
                        }`}
                      >
                        {selectedPayments === card.id && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center py-16">
                <div className="relative mb-12">
                  <div className="relative">
                    <img
                      src={CreditCard}
                      alt="Credit Card Illustration"
                      className="w-48 h-32 object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                <div className="text-center mb-12 max-w-md">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Nothing to display here!
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Add your cards to make payment easier and faster for your
                    future transactions
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="pb-8 px-4">
            <Button
              onClick={() => navigate("/addNewCard", { state: { type } })}
              className="w-full max-w-4xl mx-auto bg-Background-Primary-Defult hover:text-Text-Primary-Defult border hover:border-Border-Primary-Defult hover:bg-transparent text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 ease-out"
            >
              <Plus className="w-6 h-6" />
              Add Card
            </Button>
          </div>
        </div>
      </div>

      {loading && <Loading />}
    </>
  );
};

export default EmptyCards;
