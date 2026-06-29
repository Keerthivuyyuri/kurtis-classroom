import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

import appStore from "../assets/apple-play.png";
import playStore from "../assets/google-play.png";
import explore from "../assets/explore.png";
import microsoft from "../assets/microsoft.png";
import partner from "../assets/partner.png";
import logo from "../assets/logo.png";

function Footer() {
  const socialIcons = [
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaTiktok,
  ];

  return (
    <footer className="bg-[#335CFF] px-5 py-12 text-white sm:px-8 lg:px-6 lg:py-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[200px_130px_130px_150px_240px] lg:justify-between">
          <div className="text-center sm:text-left">
            <img
              src={logo}
              alt="Kurtis Classroom"
              className="mx-auto h-[32px] w-auto object-contain brightness-0 invert sm:mx-0"
            />

            <div className="mt-7">
              <p className="mb-3 text-[12px] font-extrabold">Get the app:</p>

              <div className="flex justify-center gap-2 sm:justify-start">
                <img src={appStore} alt="App Store" className="h-[26px]" />
                <img src={playStore} alt="Google Play" className="h-[26px]" />
              </div>

              <img
                src={explore}
                alt="Explore AppGallery"
                className="mx-auto mt-2 h-[26px] sm:mx-0"
              />
            </div>

            <div className="mt-7">
              <p className="mb-4 text-[12px] font-extrabold">Follow us:</p>

              <div className="flex justify-center gap-3 sm:justify-start">
                {socialIcons.map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white text-[#335CFF]"
                  >
                    <Icon size={13} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-[16px] font-extrabold">About</h3>
            <ul className="space-y-2 text-[14px] text-white/90">
              <li>Company</li>
              <li>Leadership</li>
              <li>Jobs - HIRING!</li>
              <li>Pricing</li>
              <li>Press</li>
              <li>Investors</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-[16px] font-extrabold">Solutions</h3>
            <ul className="space-y-2 text-[14px] text-white/90">
              <li>At School</li>
              <li>At Work</li>
              <li>At Home</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-[16px] font-extrabold">Resources</h3>
            <ul className="space-y-2 text-[14px] text-white/90">
              <li>Study with Kurtis</li>
              <li>Blog</li>
              <li>Kurtis Certified</li>
              <li>Help Center</li>
              <li>Library</li>
              <li>Shop</li>
              <li>Safety center</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-[16px] font-extrabold">
              Terms and conditions
            </h3>

            <ul className="space-y-2 text-[14px] text-white/90">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>US Privacy Laws</li>
              <li>Children's Privacy Policy</li>
              <li>Inclusion and Accessibility policy</li>
            </ul>

            <div className="mt-7 flex justify-center gap-4 sm:justify-start">
              <img
                src={microsoft}
                alt="Microsoft"
                className="h-[36px] w-auto object-contain"
              />
              <img
                src={partner}
                alt="Partner"
                className="h-[36px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-[12px] text-white/80 lg:text-left">
          Copyright © 2020, Kurtis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;