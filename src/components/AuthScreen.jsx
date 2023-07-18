import React, { useState, useRef, useEffect } from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import Image from "next/image";

//#EC8C2D

export function AuthScreen() {
  const [register, setRegister] = useState(false);
  const [pageFlip, setPageFlip] = useState("");
  const [lastPageFlip, setLastPageFlip] = useState("");
  const [pages, setPages] = useState(["z-[2] ", "z-[3] ", "z-[4] ", "z-[5] "]);
  const [firstPage, setFirstPage] = useState("rightBookPage z-[8]");

  /* Transition Funtion fro Register */
  function getRegister() {
    setRegister(() => {
      return !register;
    });
    if (!register) {
      setFirstPage((prev) => {
        return "rightBookPage z-0 book_flip border-2";
      });
      setPageFlip((prev) => {
        return "page_flip ";
      });
      setLastPageFlip((prev) => {
        return "lastPage_flip ";
      });
    } else if (register) {
      setFirstPage((prev) => {
        return "rightBookPage z-[2] lastPage_flipReverse";
      });
      setPageFlip((prev) => {
        return "";
      });
      setLastPageFlip((prev) => {
        return "lastPage_flipBack z-[5]";
      });
    }
  }

  function key() {
    let num = Math.random() * 10;
    return num;
  }

  return (
    <div className="-z-20  flex h-screen flex-col justify-center bg-color-whitesh">
      {/* Login photo */}
      <div className="login_shadow absolute right-[50%] mr-1 flex h-[510px] w-[410px] rounded-l-[25px] rounded-r-[10px] border-l-[12px] border-color-tercelary border-r-[#f1f1f1] bg-color-whitesh">
        <Image
          src={"/login.svg"}
          className="w-[100%] p-16"
          height={1024}
          width={1024}
          alt="login Img"
        ></Image>
      </div>
      {/* Login */}

      <Login func={firstPage} bookFlip={getRegister} />

      {/* White Pages */}
      {/* Fist Page Turn */}
      <div className={pageFlip + pages[0] + "white_pages flex duration-[1.3s]"}>
        <Image
          src={"/welcome.svg"}
          className="w-[100%] p-16"
          height={1024}
          width={1024}
          alt="animation flip img"
        ></Image>
      </div>
      <div className={pageFlip + pages[1] + "white_pages flex duration-[1.5s]"}>
        <Image
          src={"/page.svg"}
          className="w-[100%] p-16"
          height={1024}
          width={1024}
          alt="animation flip img"
        ></Image>
      </div>
      <div className={pageFlip + pages[2] + "white_pages flex duration-[1.8s]"}>
        <Image
          src={"/diary.svg"}
          className="w-[100%] p-16"
          height={1024}
          width={1024}
          alt="animation flip img"
        ></Image>
      </div>
      <div className={pageFlip + pages[3] + "white_pages flex duration-[2.3s]"}>
        <Image
          src={"/file.svg"}
          className="w-[100%] p-16"
          height={1024}
          width={1024}
          alt="animation flip img"
        ></Image>
      </div>

      {/* Last Page */}

      <div
        className={
          "z-[1]  " +
          lastPageFlip +
          " front absolute left-[50%] mr-2 flex h-[510px] w-[400px] origin-[-2px] rounded-l-[10px] rounded-r-[20px] bg-color-whitesh "
        }
      >
        <Image
          src={"/register.svg"}
          className="w-[100%] p-16"
          height={1024}
          width={1024}
          alt="Register img"
        ></Image>
      </div>

      {/* Register Page */}
      <div className="login_shadow absolute left-[50%] z-[0] h-[506px] w-[410px] origin-left rounded-l-[10px] rounded-r-[25px] border-r-[12px]   border-color-tercelary bg-color-whitesh">
        <Register key={key()} bookFlip={getRegister} />
      </div>
    </div>
  );
}
