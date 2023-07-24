import React, { useEffect, useState, useRef } from "react";

import {AlertCircle} from "react-feather";



/**
 * @param {{ func: string; bookFlip: React.MouseEventHandler<HTMLButtonElement> | undefined; }} props
 */
export function Login(props) {
  const LOGIN_URL = "/notes/login";

  const userRef = useRef(null);
  const errRef = useRef(null);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [checkUser, setCheckUser] = useState(false);

  return (
    <div className={props.func + " backface"}>
      <div className="backface m-auto flex  w-[92%] flex-col justify-center px-[6%] py-[10%] text-center">
        <h1 className="text-color-primary pb-5 text-center text-[45px] font-bold">
          Noted.
        </h1>
        <h2 className="text-color-tercelary mb-5 text-left text-[25px] font-semibold underline">
          Login
        </h2>
        <form className="flex flex-col">
          <input
            ref={userRef}
            autoComplete="off"
            className="login-input"
            type="email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <p
            ref={errRef}
            className={
              checkUser
                ? "text-color-secondary flex flex-row text-center text-[12px] opacity-100"
                : "absolute top-[-5px] m-0 h-0 p-0 text-[0] opacity-0"
            }
          >
            <AlertCircle color="#EC8C2D" size={16} />
            Wrong email or password
          </p>
          <input
            className="login-input"
            type="password"
            placeholder="password"
            onChange={(e) => setPwd(e.target.value)}
          />
          <p className="text-color-primary mb-4 mt-1 font-medium">
            No account?
            <button
              type="button"
              onClick={props.bookFlip}
              className="text-color-tercelary hover:text-color-tercelary2 pl-2  text-lg font-semibold hover:underline"
            >
              Register
            </button>
          </p>
          <button
            disabled={email === "" && pwd === "" ? true : false}
            className="bg-color-tercelary hover:cursor-pointer hover:bg-color-tercelary2 text-color-whitesh m-auto mb-3 w-[50%] rounded-lg p-2 text-lg font-semibold shadow-md hover:shadow-lg"
          >
            Login
          </button>
          <label
            htmlFor=""
            className="text-color-secondary relative right-1 font-medium"
          >
            Keep me signed in.
            <input
              className="
					border-color-tercelary 
					checked:bg-color-tercelary2
					relative
					left-2
					h-[18px]
					
					w-[18px]
					appearance-none
					rounded-sm
					border-2
					shadow-[inset_0px_0px_1px_1px_rgb(255,255,255)]
					transition
					duration-300
					
					ease-in-out 
				  checked:rotate-90
				  checked:rounded-sm
				  checked:bg-origin-content
				  hover:cursor-pointer

				  


					active:border-[3px]
					
				  "
              type="checkbox"
            />
          </label>
        </form>
      </div>
    </div>
  );
}
