"use client";
import * as React from "react";
import { UserContext } from "../../context/Mohamed/user-context";
import { useContext } from "react";
import {
  Settings,
  CreditCard,
  FileText,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileImage from "../../assets/images/profileImage.png";
import LocationIcons from "../../assets/icons/location-Profile.svg";

export default function ProfileDropdown({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={className} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="w-9 h-9 rounded-full overflow-hidden"
          >
            <img
              src={user?.avatar ? user?.avatar : ProfileImage}
              alt={user?.name}
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.src = ProfileImage;
              }}
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={4}
          className="w-80 p-4 bg-Background-Neutral-Lightest border border-zinc-200 rounded-xl shadow-lg"
        >
          {/* Profile Section */}
          <div className="flex items-center justify-between gap-4 rounded-lg rounded-l-2xl mb-4 hover:bg-gray-200">
            <NavLink to={"/profile"} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={user?.avatar ? user?.avatar : ProfileImage}
                  alt={user?.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = ProfileImage;
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {user?.name}
                </h3>
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
            </NavLink>
            <NavLink to={"/settings"}>
              <Settings className="w-5 h-5 text-blue-600" />
            </NavLink>
          </div>

          {/* Menu Items */}
          <div className="space-y-2">
            <DropdownMenuItem asChild>
              <NavLink
                to="/paymentMethod"
                className="flex items-center justify-between w-full p-3 rounded-lg transition-all hover:bg-gray-200 "
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Payment Method</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </NavLink>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <NavLink
                to="/settings"
                className="flex items-center justify-between w-full p-3 rounded-lg transition-all hover:bg-gray-200 "
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Settings</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </NavLink>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <NavLink
                to="/privacyPolicy"
                className="flex items-center justify-between w-full p-3 rounded-lg transition-all hover:bg-gray-200 "
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Privacy Policy</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </NavLink>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="my-2" />

            <DropdownMenuItem asChild>
              <button
                type="button"
                className="flex items-center gap-3 w-full p-3 rounded-lg transition-all text-red-500 hover:text-red-500"
                onClick={() => setUser(null)}
              >
                <LogOut className="w-5 h-5" />
                <span>Log out</span>
              </button>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
