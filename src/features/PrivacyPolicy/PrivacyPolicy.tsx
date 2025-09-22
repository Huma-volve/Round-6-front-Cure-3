import { getPrivacyPolice } from "@/api/ProfileApi/privacyPolicy";
import ArrowLeft from "../../components/ui/ArrowLeft";
import type { PrivacyPolicyResponse } from "@/types/Mohamed/Profile";

import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [privacy, setPrivacy] = useState<PrivacyPolicyResponse | null>();
  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const res = await getPrivacyPolice();
        setPrivacy(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrivacyPolicy();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto min-h-screen">
        <ArrowLeft title={"Privacy Policy"} />

        <div className="p-4">
          <div className="space-y-3 text-Text-Neutral-Darker">
            <p className="text-xl font-semibold text-black">
              Last Updated:{" "}
              <span className="text-Text-Neutral-Darker font-normal">
                {new Date().toLocaleDateString()}
              </span>
            </p>

            <div>
              <p className="text-base whitespace-pre-line">
                {`Welcome to Cure.\n This Privacy Policy details
                                how we collect, use, and protect your personal
                                information within our doctor appointment
                                booking app.`}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-base font-bold text-gray-900 mb-3">
                {privacy?.title}
              </h2>
              {privacy?.content.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
