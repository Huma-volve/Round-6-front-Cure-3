import { useContext, useEffect, useState } from "react";
import ProfileImage from "../../assets/images/profileImage.png";
import ArrowRightIcons from "../../assets/icons/arrow-right.svg";
import NotificationIcons from "../../assets/icons/bell.svg";
import LocationIcons from "../../assets/icons/location-Profile.svg";
import PaymentIcons from "../../assets/icons/Banknote 3.svg";
import HeartIcons from "../../assets/icons/Heart.svg";
import SettingsIcons from "../../assets/icons/Settings.svg";
import FaqIcons from "../../assets/icons/Chat Line.svg";
import PrivacyIcons from "../../assets/icons/Lock Keyhole Minimalistic.svg";
import LogoutIcons from "../../assets/icons/Logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { getProfile } from "@/api/ProfileApi/profile";
import { Model } from "../../components/ui/Model";
import { UserContext } from "../../context/Mohamed/user-context";
import { logoutAccount } from "@/api/ProfileApi/logoutAccount";
import toast from "react-hot-toast";
import type { RowProps } from "@/types/Mohamed/Profile";
import Loading from "@/Layout/Common/Loading";

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await getProfile();
        setUser(res);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [setUser]);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      const res = await logoutAccount();
      toast("Good Bye " + res?.message, {
        icon: "👋",
      });

      setUser(null);
      navigate("/signinEmail");
    } catch (error: unknown) {
      console.error("Logout failed:", error);
      setUser(null);
      navigate("/login");
    } finally {
      setLogoutLoading(false);
      setShowLogoutModal(false);
    }
  };

  const Row = ({
    leftIcon,
    label,
    right,
    danger = false,
    to,
    onClick,
  }: RowProps) => {
    const content = (
      <>
        <img src={leftIcon} alt={label} className="w-6 h-6" />
        <span
          className={`text-base ${
            danger
              ? "text-Text-Semantic-Error-Defult"
              : "text-Text-Secondary-Defult"
          }`}
        >
          {label}
        </span>
        <div className="ml-auto flex items-center gap-2">
          {right ?? (
            <img
              src={ArrowRightIcons}
              alt="Arrow Right"
              className="text-Neutral-Defult w-5 h-5 cursor-pointer"
            />
          )}
        </div>
      </>
    );

    if (to) {
      return (
        <NavLink
          to={to}
          className="cursor-pointer flex items-center gap-3 px-4 py-3 bg-Background-Neutral-Lightest rounded-lg"
        >
          {content}
        </NavLink>
      );
    }

    return (
      <div
        onClick={onClick}
        className="cursor-pointer flex items-center gap-3 px-4 py-3 bg-Background-Neutral-Lightest rounded-lg"
      >
        {content}
      </div>
    );
  };

  return (
    <>
      <div className="mt-10 px-4 max-w-6xl m-auto min-h-screen">
        <NavLink
          to="/EditProfile"
          className="flex items-center gap-4 px-4 py-2 bg-Background-Neutral-Lightest rounded-lg"
        >
          <div>
            <img
              src={user?.avatar || ProfileImage}
              alt={user?.name || "Profile"}
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.src = ProfileImage;
              }}
            />
          </div>
          <div className="profileName flex justify-between w-full items-center">
            <div className="">
              <h2 className="text-xl text-Text-Secondary-Defult">
                {user?.name}
              </h2>
              {user?.address ? (
                <p className="text-xs text-Text-Neutral-Darker flex items-center gap-1">
                  <img src={LocationIcons} alt="Location" />
                  {user?.address}
                </p>
              ) : (
                <p className="text-xs text-Text-Neutral-Darker flex items-center gap-1">
                  <img src={LocationIcons} alt="Location" />
                  No address
                </p>
              )}
            </div>
            <div>
              <img
                src={ArrowRightIcons}
                alt="Arrow Right"
                className="text-Text-Neutral-default w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        </NavLink>

        <div className="mt-6 space-y-4">
          <Row
            leftIcon={NotificationIcons}
            label="Notification"
            onClick={() => {
              setNotificationsEnabled((prev) => !prev);
            }}
            right={
              <button
                type="button"
                role="switch"
                aria-checked={notificationsEnabled}
                aria-label={
                  notificationsEnabled
                    ? "Disable notifications"
                    : "Enable notifications"
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition duration-300 cursor-pointer ${
                  notificationsEnabled
                    ? "bg-Success-Defult"
                    : "bg-Background-Neutral-Darker/30"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                    notificationsEnabled ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            }
          />

          <Row
            leftIcon={PaymentIcons}
            label="Payment Method"
            to="/paymentMethod"
          />
          <Row leftIcon={HeartIcons} label="Favorite" to="/favorites" />
          <Row leftIcon={SettingsIcons} label="Settings" to="/settings" />
          <Row leftIcon={FaqIcons} label="FAQs" to="/" />
          <Row
            leftIcon={PrivacyIcons}
            label="Privacy Policy"
            to="/privacyPolicy"
          />

          <Row
            leftIcon={LogoutIcons}
            label="Log out"
            danger
            right={<span />}
            onClick={() => setShowLogoutModal(true)}
          />
        </div>
      </div>
      <Model
        showModal={showLogoutModal}
        setShowModal={setShowLogoutModal}
        titleModal="Logout"
        contentModal="Are you sure you want to log out?"
        YesButtonText={logoutLoading ? "Logout..." : "Yes, Logout"}
        loading={logoutLoading}
        onConfirm={handleLogout}
      />
      {loading && <Loading />}
    </>
  );
};

export default Profile;
