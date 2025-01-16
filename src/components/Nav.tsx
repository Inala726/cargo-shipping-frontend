import logo from "../assets/images/3.png";
import { HiOutlineDownload } from "react-icons/hi";

const Nav = () => {
  return (
    <>
      <nav className="w-[95%] h-[80px] flex items-center justify-between p-8 border-b m-auto text-white">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>
        <div className="">
          <ul className="flex items-center justify-center gap-7">
            <li>Home</li>
            <li>Company</li>
            <li>Tracking</li>
            <li>Services</li>
            <li>Support</li>
            <li>Faqs</li>
          </ul>
        </div>
          <button className="flex items-center gap-3 rounded-[150px] bg-customBlue px-3 py-3 ">
            Send your quote <HiOutlineDownload />
          </button>
      </nav>
    </>
  );
};

export default Nav;
