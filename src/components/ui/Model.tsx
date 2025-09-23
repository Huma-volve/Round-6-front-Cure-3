import { useState } from "react";
import type { ModelProps } from "@/types/Mohamed/Profile";
import { Loader2Icon } from "lucide-react";

export const Model = ({
  showModal,
  setShowModal,
  titleModal,
  contentModal,
  YesButtonText,
  onConfirm,
  loading,
}: ModelProps) => {
  const [password, setPassword] = useState("");

  const handleConfirm = () => {
    if (titleModal === "Delete Account") {
      onConfirm?.(password);
    } else if (titleModal === "Logout") {
      onConfirm?.();
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-[430px] max-w-[90%] rounded-4xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-center text-xl text-Text-Secondary-Defult font-medium">
              {titleModal}
            </h3>
            <div className="my-3 border-t border-gray-200" />
            <p className="text-center text-base text-Text-Neutral-Darker mb-5">
              {contentModal}
            </p>

            {titleModal === "Delete Account" && (
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg text-sm"
              />
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full px-6 py-2 rounded-lg bg-Background-Neutral-Lightest text-sm text-Text-Secondary-Defult font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-Background-Primary-Defult text-sm text-white font-medium cursor-pointer"
              >
                {loading && <Loader2Icon className="w-5 h-5 animate-spin" />}
                {loading ? "Loading..." : YesButtonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
