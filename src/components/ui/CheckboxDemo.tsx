import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FaPaypal, FaCcVisa, FaApplePay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <Label
        htmlFor="credit-card"
        className="flex items-center justify-between rounded-xl cursor-pointer
        has-[[aria-checked=true]]:border-green-600 has-[[aria-checked=true]]:bg-green-100 has-[[aria-checked=true]]:rounded-2xl p-3"
      >
        <div className="flex items-center gap-3">
          <Checkbox
            id="credit-card"
            className = "data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 rounded-full"
          />
          <span className="font-medium text-gray-500">Credit Card</span>
        </div>
        <FaCcVisa className="w-8 h-8 text-blue-600" />
      </Label>

      <Label
        htmlFor="Paypal"
        className="flex items-center justify-between rounded-xl cursor-pointer
        has-[[aria-checked=true]]:border-green-600 has-[[aria-checked=true]]:bg-green-100 has-[[aria-checked=true]]:rounded-2xl p-3"
      >
        <div className="flex items-center gap-3">
          <Checkbox
            id="Paypal"
            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 rounded-full"
          />
          <span className="font-medium text-gray-500">Paypal</span>
        </div>
        <FaPaypal className="w-8 h-8 text-blue-600" />
      </Label>
      <Label
        htmlFor="ApplePay"
        className="flex items-center justify-between rounded-xl cursor-pointer
        has-[[aria-checked=true]]:border-green-600 has-[[aria-checked=true]]:bg-green-100 has-[[aria-checked=true]]:rounded-2xl p-3"
      >
        <div className="flex items-center gap-3">
          <Checkbox
            id="ApplePay"
            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 rounded-full"
          />
          <span className="font-medium text-gray-500">Apple Pay</span>
        </div>
        <FaApplePay className="w-8 h-8" />
      </Label>
        <NavLink to="/paymentMethod">
          <button className="w-full border-dashed border-[1px] text-Background-Primary-Defult py-2 rounded-xl cursor-pointer hover:bg-Background-Primary-Defult transition-colors duration-300 hover:text-Background-Neutral-Lightest ease-in-out"> + Add New Card</button>
        </NavLink>
     
    </div>
  );
}
