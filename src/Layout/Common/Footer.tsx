import phoneIcon from "@/assets/icons/phone.svg";
import emailIcon from "@/assets/icons/Email.svg";
import addressIcon from "@/assets/icons/address.svg";
import logo from "@/assets/icons/logo-white.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import youtubeIcon from "@/assets/icons/youtube.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import { Link } from "react-router-dom";

const companyLinks = [
  { label: "Home", url: "/" },
  { label: "Doctors", url: "/doctors" },
  { label: "FAQs", url: "/#faq" },
  { label: "Contact Us", url: "/contact-us" },
];
const supportLinks = [
  { label: "Help Center", url: "/" },
  { label: "How it works", url: "/#how" },
  { label: "Privacy Policy", url: "/privacyPolicy" },
  { label: "Contact Us", url: "/contact-us" },
];
const contactInfo = [
  { icon: phoneIcon, type: "Phone", info: "080 707 555-321" },
  { icon: emailIcon, type: "Email", info: "demo@example.com" },
  {
    icon: addressIcon,
    type: "Address",
    info: "526 Melrose Street, Water Mill, 11976 New York",
  },
];
const socialMedia = [
  { icon: facebookIcon, alt: "Facebook", url: "https://www.facebook.com/" },
  { icon: whatsappIcon, alt: "Whatsapp", url: "https://www.whatsapp.com/cure" },
  { icon: youtubeIcon, alt: "Youtube", url: "https://www.youtube.com/" },
  { icon: linkedinIcon, alt: "Linkedin", url: "https://www.linkedin.com/" },
];

const Footer = () => {
  return (
    <footer className="bg-Background-Secondary-Defult">
      <div className="text-white m-auto w-full max-w-[1240px] px-4 pt-[100px]">
        <div className="grid mb-10 grid-cols-1 gap-12 lg:gap-8 justify-start md:grid-cols-3">
          <div className="flex flex-col gap-6 w-fit col-span-1">
            <Link to="/" className="flex gap-4 items-center text-3xl">
              <img src={logo} alt="Cure" />
              <p>Cure</p>
            </Link>
            <p className="lg:text-base text-sm md:max-w-[356px] max-w-3xs">
              Cure helps you find trusted doctors, book appointments, and manage
              your health—quickly and easily.
            </p>
            <ul className="flex gap-4">
              {socialMedia.map((icon) => (
                <li key={icon.alt}>
                  <a
                    href={icon.url}
                    className="bg-white hover:bg-Background-Primary-Lightest duration-300 transition-colors h-10 w-10 flex justify-center items-center rounded-[8px]"
                  >
                    <img src={icon.icon} alt={icon.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-14 lg:gap-[50px] sm:gap-8 md:m-auto col-span-2">
            <div>
              <p className="lg:text-2xl mb-6 text-lg">Company</p>
              <ul className="flex flex-col gap-4">
                {companyLinks.map((link) => (
                  <li key={link.label} className="text-sm lg:text-base">
                    <Link
                      className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                      to={link.url}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="lg:text-2xl mb-6 text-lg">Support</p>
              <ul className="flex flex-col gap-4">
                {supportLinks.map((link) => (
                  <li key={link.label} className="text-sm lg:text-base">
                    <Link
                      className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                      to={link.url}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="lg:text-2xl mb-6 text-lg">Contact Info</p>
              <ul className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <li
                    key={item.type}
                    className="flex gap-4 items-start text-sm lg:text-base"
                  >
                    <img className="py-1" src={item.icon} alt={item.type} />
                    <div className="flex gap-2 flex-col">
                      <p>{item.type}</p>
                      <p className="max-w-[204px] text-sm">{item.info}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-between text-sm lg:text-base pb-9">
          <p>@2024 Techvio - All Right Reserved</p>
          <p>Terms & Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
