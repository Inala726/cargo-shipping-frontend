import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo (1) 1.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F5F5F5] p-16 h-[500px] text-[14px] text-[#000000]">
        <div className="body h-full flex items-center justify-center gap-20">
          <div className="flex flex-col gap-10 w-[300px]">
            <div className="logo">
              <img src={logo} alt="" className="w-22" />
            </div>
            <div className="desc">
              <p className="text-[16px] font-[700] mb-2">Tropsnart</p>
              <p className="text-[14px]">
                Our main focus is to provide our industrial clients with a
                competitive, reliable and flexible service, at minimum cost - in
                the best possible way.
              </p>
            </div>
            <div className="icons flex items-center gap-5">
              <FaWhatsapp />
              <FaInstagram />
              <FaXTwitter />
              <FaTelegramPlane />
            </div>
          </div>

          <div className="hug flex items-center justify-between gap-20 ">
            <div className="w-[250px]">
              <div>
                <p className="text-[16px] font-[700] mb-2">Top Tracking Faqs</p>
              </div>
              <div>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  laudantium ipsam aperiam corrupti soluta voluptatem veritatis.
                  Accusantium quam eaque quae? Deleniti, asperiores deserunt.
                  Quia, amet.
                </p>
              </div>
            </div>

            <div className="">
              <div className="">
                <p className="text-[16px] font-[700] mb-2">Useful Links</p>
              </div>
              <div className="">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Tracking</li>
                  <li>Tracking</li>
                  <li>Tracking</li>
                  <li>Tracking</li>
                  <li>Tracking</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="">
                <p className="text-[16px] font-[700] mb-2">Support</p>
              </div>
              <div className="">
                <ul>
                  <li>Contact Us</li>
                  <li>Faq</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div>
                <p className="text-[16px] font-[700] mb-2">Subscribe</p>
                <p>
                  Sign up for Alerts, Special Offers, Education and Updates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_container py-4 border-t border-[#918e8e] text-[#4d4b4b]">
          <div className="container mx-auto px-4 flex gap-52">
            <div className="a mb-4 md:mb-0">
              <p>© 2025 Eonace. All rights reserved.</p>
            </div>
            <div className="flex gap-10">
              <p>Copyright</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
