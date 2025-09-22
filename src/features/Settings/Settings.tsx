import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../assets/icons/UserRounded.svg";
import KeyPassIcon from "../../assets/icons/KeyPass.svg";
import ArrowLeft from "../../components/ui/ArrowLeft";
import { Model } from "../../components/ui/Model";
import { useState } from "react";
import { deleteAccount } from "@/api/ProfileApi/deleteAccount";
import toast from "react-hot-toast";

const Settings = () => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordManagement = () => {
    navigate("/passwordResetFlow");
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto min-h-screen">
        <ArrowLeft title={" Settings"} />

        <div className="p-4 space-y-4">
          <button
            onClick={handlePasswordManagement}
            className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <img
                src={KeyPassIcon}
                alt="Key Password"
                className="w-5 h-5 text-gray-700"
              />
              <span className="text-gray-900 font-medium">
                Password Management
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={handleDeleteAccount}
            className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <img
              src={ProfileIcon}
              alt="Profile Icon"
              className="w-5 h-5 text-gray-700"
            />
            <span className="text-gray-900 font-medium">Delete Account</span>
          </button>
        </div>
      </div>
      <Model
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        titleModal="Delete Account"
        contentModal="Please confirm your password to delete your account."
        YesButtonText={loading ? "Deleting..." : "Delete"}
        loading={loading}
        onConfirm={async (password) => {
          if (!password) {
            toast.error("Password is required");
            return;
          }
          setLoading(true);
          try {
            const res = await deleteAccount({ password });
            toast.success(res.data.message);
            navigate("/signup");
            localStorage.removeItem("token");
          } catch (error: unknown) {
            const message =
              error instanceof Error
                ? error.message
                : "Failed to delete account";
            toast.error(message);
          } finally {
            setLoading(false);
          }
        }}
      />
    </div>
  );
};

export default Settings;
