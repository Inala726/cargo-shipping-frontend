import "../App.css";
import Nav from "./Nav";
import herosectionImage from "../assets/images/24.jpg";
import seaFreightImage from "../assets/images/4.jpg";
import landFreightImage from "../assets/images/5.jpg";
import airFreightImage from "../assets/images/6.jpg";
import largeImage from "../assets/images/16.jpg";
import smallImage from "../assets/images/7.jpg";
import bannerImage from "../assets/images/20.jpg";
import { BsBoxes } from "react-icons/bs";
import { LuChartSpline } from "react-icons/lu";
import { TbCarSuv } from "react-icons/tb";
import { RiListSettingsLine } from "react-icons/ri";
import star from "../assets/images/fluent-color_star-48.png";
import woman from "../assets/images/Rectangle 8.png";
import dude from "../assets/images/Rectangle 8 (1).png";
import blackWoman from "../assets/images/Rectangle 8 (2).png";
import fx from "../assets/images/Ellipse 4.png";
import progressBar from "../assets/images/Group 2.png";
import downImage from "../assets/images/5.jpg";
import frame from "../assets/images/Frame 63.png"
const Homepage = () => {
  return (
    <>
      <div
        className="relative h-screen w-full bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${herosectionImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0044bc] bg-opacity-30">
          <Nav />
          <div className="mt-[100px] w-[40%] ml-[80px] flex flex-col gap-7">
            <div className="bg-white w-fit px-4 py-2 rounded-2xl text-[16px] font-[400] text-black">
              <p>Welcome to Tropsnart</p>
            </div>
            <div className="leading-[1.2]">
              <p className="text-[48px]">Reliable and Competitive</p>
              <p className="text-[48px]">Cargo Logistics Leader</p>
            </div>
            <div className="">
              <p className="text-xl">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae in vitae adipisci voluptates ullam veritatis,
                voluptatibus distinctio necessitatibus accusantium!
              </p>
            </div>
            <div className="">
              <input
                type="text"
                className="h-[50px] w-[80%] rounded-full p-7"
                placeholder="Enter tracking ID"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=""> */}
      <div className="flex flex-col items-center justify-center m-10">
        <p className="font-[900] text-4xl">What we Deliver</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* <!-- Card 1 --> */}
        <div className="bg-[#e0eeff] rounded-lg shadow-md overflow-hidden">
          <img
            src={seaFreightImage}
            alt="Sea Freight"
            className="w-full h-48 object-cover"
          />
          <div className="p-8">
            <h3 className="text-lg font-[800] mb-2">SEA FREIGHT</h3>
            <p className="text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-[#e0eeff] rounded-lg shadow-md overflow-hidden">
          <img
            src={airFreightImage}
            alt="Air Freight"
            className="w-full h-48 object-cover"
          />
          <div className="p-8">
            <h3 className="text-lg font-[800] mb-2">AIR FREIGHT</h3>
            <p className="text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-[#e0eeff] rounded-lg shadow-md overflow-hidden">
          <img
            src={landFreightImage}
            alt="Land Freight"
            className="w-full h-48 object-cover"
          />
          <div className="p-8">
            <h3 className="text-lg font-[800] mb-2">LAND FREIGHT</h3>
            <p className="text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col-reverse gap-20 mt-[50px] md:flex-row items-center px-6 md:px-12 lg:px-24 py-12">
        {/* Image Section */}
        <div className="relative flex-shrink-0 w-full md:w-1/2">
          <img
            src={largeImage}
            alt="Cargo Yard"
            className="rounded-xl w-[90%] h-96 object-cover shadow-lg"
          />
          <img
            src={smallImage}
            alt="Additional Cargo"
            className="absolute bottom-11 right-0 w-1/2 md:w-[40%] rounded-xl shadow-md transform translate-x-4 translate-y-4"
          />
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-[800]">
            Seamless <br /> International Cargo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
            Get more Information
          </button>
        </div>
      </section>

      <div className="container grid  mx-auto px-6 py-10">
        <h2 className="text-3xl font-[800] mb-4">Why Choose Us?</h2>
        <p className="mb-8 text-gray-600">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#e0eeff] rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-5">
            <div className="text-blue-500 text-[30px] mb-4 ">
              <BsBoxes />
            </div>
            <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Our services
            </button>
          </div>
          <div className="bg-[#e0eeff] rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-5">
            <div className="text-blue-500 text-4xl mb-4">
              <LuChartSpline />
            </div>
            <h3 className="text-xl font-semibold mb-2">Help Transportation</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Our services
            </button>{" "}
          </div>
          <div className="bg-[#e0eeff] rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-5">
            <div className="text-blue-500 text-4xl mb-4">
              <TbCarSuv />
            </div>
            <h3 className="text-xl font-semibold mb-2">Logistics Scale</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Our services
            </button>{" "}
          </div>
          <div className="bg-[#e0eeff] rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-5">
            <div className="text-blue-500 text-4xl mb-4">
              <RiListSettingsLine />
            </div>
            <h3 className="text-xl font-semibold mb-2">Supply Chain</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Our services
            </button>{" "}
          </div>
          <div className="bg-[#e0eeff] rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-5">
            <div className="text-blue-500 text-[30px] mb-4 ">
              <BsBoxes />
            </div>
            <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Our services
            </button>{" "}
          </div>
          <div className="bg-[#e0eeff] rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-5">
            <div className="text-blue-500 text-[30px] mb-4 ">
              <BsBoxes />
            </div>
            <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Our services
            </button>{" "}
          </div>
        </div>
      </div>

      <div className="bg-blue-500 flex items-center justify-between w-[90%] mx-auto my-11 rounded-xl ">
        {/* <!-- Left Side: Text Content --> */}
        <div className="text-white w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">
            We guarantee safe Transportation and delivery
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
          </p>
        </div>

        {/* <!-- Right Side: Image --> */}
        <div className="w-1/2 flex justify-end h-full">
          <img
            src={bannerImage}
            alt="Delivery Image"
            className="h-full w-[40]"
          />
        </div>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center m-10">
          <p className="font-[900] text-4xl">What people say about us</p>
          <div className="flex gap-5 items-center">
            <div className="border border-black w-80 h-[1px]"></div>
            <p>Over 300+ people have put their trust in us</p>
            <div className="border border-black w-80 h-[1px]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-[80%] mx-auto">
          {/* <!-- Card 1 --> */}
          <div className="bg-[#e0eeff] rounded-lg h-[348px] shadow-md relative w-full">
            <div className="ml-3 flex gap-3 items-center absolute -top-5 ">
              <img src={woman} alt="" className="" />

              <div className="">
                <div className="flex">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p className="font-[700] text-[20px]">Sartor Sarvvitart</p>
                <p>Cargo FC</p>
              </div>
            </div>
            <div className="p-8 mt-28">
              <p className="text-[16px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-[#e0eeff] rounded-lg h-[348px] shadow-md relative w-full">
            <div className="ml-3 flex gap-3 items-center absolute -top-5 ">
              <img src={dude} alt="" className="" />

              <div className="">
                <div className="flex">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p className="font-[700] text-[20px]">Sartor Sarvvitart</p>
                <p>Cargo FC</p>
              </div>
            </div>
            <div className="p-8 mt-28">
              <p className="text-[16px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-[#e0eeff] rounded-lg h-[348px] shadow-md relative w-full">
            <div className="ml-3 flex gap-3 items-center absolute -top-5 ">
              <img src={blackWoman} alt="" className="" />

              <div className="">
                <div className="flex">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p className="font-[700] text-[20px]">Sartor Sarvvitart</p>
                <p>Cargo FC</p>
              </div>
            </div>
            <div className="p-8 mt-28">
              <p className="text-[16px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center m-10">
        <p className="font-[900] text-4xl">What our Customers are thinking</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 w-[80%] mx-auto">
        {/* <!-- Card 1 --> */}
        <div className="bg-[#e0eeff] rounded-lg shadow-md w-full p-8">
          <div className="ml-3 flex gap-3 items-center">
            <img src={fx} alt="" className="" />

            <div className="">
              <div className="flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="font-[700] text-[20px]">Overall Rating</p>
              <p>Cargo FC</p>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between mt-10">
            <p className="text-[16px] font-[900]">On Time Delivery</p>
            <img src={progressBar} alt="" className="h-[15px]" />
          </div>
          <div className="p-4 flex items-center justify-between mt-">
            <p className="text-[16px] font-[900]">On Time Delivery</p>
            <img src={progressBar} alt="" className="h-[15px]" />
          </div>
        </div>

        <div className="bg-[#e0eeff] rounded-lg shadow-md w-full p-8">
          <div className="ml-3 flex gap-3 items-center">
            <img src={fx} alt="" className="" />

            <div className="">
              <div className="flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="font-[700] text-[20px]">Overall Rating</p>
              <p>Cargo FC</p>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between mt-10">
            <p className="text-[16px] font-[900]">On Time Delivery</p>
            <img src={progressBar} alt="" className="h-[15px]" />
          </div>
          <div className="p-4 flex items-center justify-between mt-">
            <p className="text-[16px] font-[900]">On Time Delivery</p>
            <img src={progressBar} alt="" className="h-[15px]" />
          </div>
        </div>
      </div>

      <div
        className="relative h-[600px] w-[78%] mx-auto my-10 p-8 gap-10 flex items-center justify-between rounded-lg bg-cover bg-center bg-no-repeat bg-[#002355a9]  text-[#FFFFFF]"
        style={{
          backgroundImage: `url(${downImage})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col gap-7 w-1/2">
          <div className="bg-white w-fit px-4 py-2 rounded-2xl text-[12px] font-[400] text-black">
            <p>Welcome to Tropsnart</p>
          </div>
          <div className="text-[40px] font-[800]">
            <p>
              Cargo Request <br /> Response
            </p>
          </div>
          <div className="">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              necessitatibus harum perspiciatis earum a excepturi cupiditate,
              atque mollitia beatae.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <form className="border p-12 text-sm rounded-3xl backdrop-blur-[5px] backdrop-saturate-[156%] bg-[rgba(180,195,224,0)]  border-[rgba(255,255,255,0.125)]">
            <p className="mb-5 text-[20px] font-[800]">Cargo Request Quote</p>
            <div className="mb-4 flex gap-4">
              {/* Select Method */}
              <select
                className="w-full border rounded-3xl py-[8px] px-[14px] bg-transparent"
                required
              >
                <option value="" disabled selected>
                  Select Method
                </option>
              </select>
              {/* Enter Length */}
              <input
                type="text"
                className="w-full border rounded-3xl bg-transparent p-2"
                placeholder="Enter Length"
              />
            </div>

            {/* Enter Weight */}
            <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded-full bg-transparent p-2"
                placeholder="Enter Weight"
              />
            </div>

            <div className="mb-4 flex gap-4">
              {/* From Country */}
              <select
                className="w-full border rounded-3xl py-[8px] px-[14px] bg-transparent"
                required
              >
                <option value="" disabled selected>
                  from Country
                </option>
              </select>
              {/* To Country */}
              <select
                className="w-full border rounded-3xl py-[8px] px-[14px] bg-transparent"
                required
              >
                <option value="" disabled selected>
                  to Country
                </option>
              </select>
            </div>

            {/* Select Service */}
            <div className="mb-4">
              <select
                className="w-full border rounded-3xl py-[8px] px-[14px] bg-transparent"
                required
              >
                <option value="" disabled selected>
                  Select Service
                </option>
              </select>
            </div>

            {/* Enter Email */}
            <div className="mb-4">
              <input
                type="email"
                className="w-full border rounded-full bg-transparent p-2"
                placeholder="Enter Email ID"
              />
            </div>

            {/* Submit Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Request Quote
            </button>
          </form>
        </div>
      </div>

      <div className="w-[80%] mx-auto mb-24">
        <img src={frame} alt="" />
      </div>
    </>
  );
};

export default Homepage;
