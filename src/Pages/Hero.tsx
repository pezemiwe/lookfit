import React from "react";
import { AvatarCanvas } from "../components/AvatarCanvas";
import { MaleCanvas } from "../components/MaleCanvas";
import { FemaleCanvas } from "../components/FemaleCanvas";
import Shirt from "../assets/images/shirt.png";
import Polo from "../assets/images/polo.png";
import Short from "../assets/images/shorts.png";
import Trouser from "../assets/images/trouser.png";
import FemaleShirt from "../assets/images/shirt-f.png";
import Skirt from "../assets/images/skirt-f.png";
import Dress from "../assets/images/dress-f.png";
import FemaleJeans from "../assets/images/jean-f.png";
import { TbArrowBack } from "react-icons/tb";
import { PiUserSwitchBold } from "react-icons/pi";
import ReadyPlayer from "./ReadyPlayer";

export const Hero = () => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [selectAvatar, setSelectAvatar] = React.useState<string>("");
  const [loadStudio, setLoadStudio] = React.useState<boolean>(false);
  const clothing = [
    {
      name: "Shirts",
      image: Shirt,
    },
    {
      name: "Polo",
      image: Polo,
    },
    {
      name: "Shorts",
      image: Short,
    },
    {
      name: "Trousers",
      image: Trouser,
    },
  ];

  const femaleWears = [
    {
      name: "Shirt",
      image: FemaleShirt,
    },
    {
      name: "Skirt",
      image: Skirt,
    },
    {
      name: "Dress",
      image: Dress,
    },
    {
      name: "Jeans",
      image: FemaleJeans,
    },
  ];
  return (
    <>
      {loadStudio ? (
        <ReadyPlayer />
      ) : (
        <div className="bg-[url('/origin.jpg')] bg-center bg-no-repeat bg-cover relative w-screen mx-auto h-screen">
          <div className="h-[85%]">
            <nav className="bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex-shrink-0">
                    <a href="#" className="text-black text-2xl font-bold">
                      LookFit
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 text-sm flex items-baseline space-x-4">
                      <a href="#" className="text-black hover:text-gray-300">
                        Home
                      </a>
                      <a href="#" className="text-black hover:text-gray-300">
                        About
                      </a>
                      <a href="#" className="text-black hover:text-gray-300">
                        Services
                      </a>
                      <a href="#" className="text-black hover:text-gray-300">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {selectAvatar === "" && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between">
                <div className={`${isClicked ? "hidden" : "flex"} flex-col`}>
                  <h1 className="text-black text-6xl font-extrabold">
                    Create your <br /> Virtual <br />
                    <span className="text-gray-600">Wardrobe</span>
                  </h1>
                  <p className="hidden sm:block text-md mt-5 text-black w-[350px]">
                    The latest approach to effortlessly curate your wardrobe
                    with virtual try-on outfits
                  </p>
                  <button
                    className="text-white bg-black font-bold px-6 py-3 rounded-xl mt-4 w-40"
                    onClick={() => {
                      setLoadStudio(true);
                    }}
                  >
                    Get Started
                  </button>
                </div>
                <div className={`h-full ${isClicked ? "w-full" : "w-3/5"}`}>
                  <AvatarCanvas
                    isClicked={isClicked}
                    setSelectAvatar={setSelectAvatar}
                  />
                </div>
              </div>
            )}
            {selectAvatar !== "" && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col">
                <div className="w-full py-4 flex justify-center">
                  <div className="rounded-[40px] h-[40px] w-[80px] bg-themebg4 backdrop-blur-lg shadow-md border-2 border-border p-1 flex items-center">
                    <div
                      className="h-[30px] w-[30px] rounded-[50%] cursor-pointer backdrop-blur-lg bg-theme-bg flex justify-center items-center"
                      onClick={() => setSelectAvatar("")}
                    >
                      <TbArrowBack size={24} color="white" />
                    </div>
                    <div
                      className="h-[30px] w-[30px] rounded-[50%] cursor-pointer ml-2 backdrop-blur-lg bg-theme-bg flex justify-center items-center"
                      onClick={() => {
                        if (selectAvatar === "male") {
                          setSelectAvatar("female");
                        } else {
                          setSelectAvatar("male");
                        }
                      }}
                    >
                      <PiUserSwitchBold size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div className="h-[90%] flex justify-between w-full">
                  <div className="backdrop-blur-lg bg-theme-bg h-full w-48 flex flex-col shadow-md overflow-auto no-scrollbar rounded">
                    {(selectAvatar === "female" ? femaleWears : clothing).map(
                      (item) => (
                        <div
                          key={item.name}
                          className="cursor-pointer my-2 bg-theme-bg2 backdrop-blur py-2 flex flex-col items-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-[150px]"
                          />
                          <p className="text-black font-bold text-center">
                            {item.name}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                  <div>
                    {selectAvatar === "male" && <MaleCanvas />}
                    {selectAvatar === "female" && <FemaleCanvas />}
                  </div>
                  <div className="backdrop-blur-lg bg-theme-bg h-full w-48 shadow-md rounded"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
