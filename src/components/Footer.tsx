import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/3.png";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F5F5F5] p-20">
        <div className="body  flex items-center justify-between gap-28">
        <div className="">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="desc">
                <p>Tropsnart</p>
                <p>Our main focus is to provide our industrial clients with a competitive, reliable and flexible service, at minimum cost - in the best possible way.</p>
            </div>
            <div className="icons">
            <FaWhatsapp />
            <FaInstagram/>
            <FaXTwitter/>
            <FaTelegram/>
            </div>
        </div>



        <div className="">
            <div className="">
            <p>Top Tracking Faqs</p>
            </div>
            <div className="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A laudantium ipsam aperiam corrupti soluta voluptatem veritatis. Accusantium quam eaque quae? Deleniti, asperiores deserunt. Quia, amet.</p>
            </div>
        </div>




        <div className="">
            <div className="">
            <p>Useful Links</p>
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
                <p>Support</p>
            </div>
            <div className="">
                <ul>
                    <li>Contact Us</li>
                    <li>Faq</li>
                </ul>
            </div>
        </div>



        <div className="">
            <div className="">
                <p>Subscribe</p>
                <p>Sign up for Alerts, Special Offers, Education and Updates.</p>
            </div>
            <div className="">
                <input type="text" placeholder="Enter your email..." />
                <button>Subscribe</button>
            </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
