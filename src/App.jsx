import React, { useState } from "react"
import image from "./assets/images/illustration-sign-up-mobile.svg"
import listImage from "./assets/images/icon-list.svg"
import successImage from "./assets/images/icon-success.svg"

const App = () => {
  const [clicked, setClicked] = useState(false)
  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleClick = (e) => {
    if (validateEmail(email)) {
      setValidEmail(true)
      setClicked(!clicked)
    } else {
      setValidEmail(false)
    }
    // console.log(clicked, email, validEmail)
  }

  const handleDismissClick = () => {
    setEmail("")
    setClicked(false)
    setValidEmail(false)
  }

  if (clicked) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-gray-400">
        <div className="flex flex-col h-[90vh] w-[20rem] bg-white pl-6 pr-6 md:h-[50%] md:pl-8 rounded-lg">
          <img
            src={successImage}
            alt="success image"
            className="h-12 w-12 mt-32 mb-8 md:mt-8 md:mb-6"
          />
          <h1 className="font-Roboto font-bold text-4xl mb-6 md:mb-4">
            Thanks for subscribing!
          </h1>
          <p className="font-Roboto text-sm">
            A confirmation email has been sent to{" "}
            <span className="font-black">ash@loremcompany.com.</span> Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button
            onClick={handleDismissClick}
            className="mt-40 w-[100%] bg-slate-800 text-white h-[2.5rem] rounded-[6px] text-xs hover:bg-gradient-to-r focus:bg-gradient-to-r from-zinc-400 to-red-400 md:mt-4"
          >
            Dismiss message
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-400">
      <div className="flex flex-col h-[40rem] rounded-lg w-[20rem] md:flex-row-reverse bg-white md:w-[45rem] md:h-[25rem] ">
        <img
          src={image}
          alt="sign up"
          className=" object-cover md:w-[20rem] md:m-4 rounded-lg"
        />
        <div className="flex flex-col justify-start ml-4 mr-8 md:ml-8 md:mt-12">
          <h1 className="font-Roboto font-bold text-[32px] mb-2">
            Stay updated!
          </h1>
          <p className="font-Roboto font-light text-[14px] mb-4">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mb-4">
            <li className="pb-2">
              <div className="flex items-start">
                <img src={listImage} alt="list image" className="pr-4" />
                <p className="font-medium leading-tight md:text-xs">
                  Product discovery and building what matters
                </p>
              </div>
            </li>
            <li className="pb-2">
              <div className="flex items-start">
                <img src={listImage} alt="list image" className="pr-4" />
                <p className="font-medium leading-tight md:text-xs">
                  Measuring to ensure updates are a success
                </p>
              </div>
            </li>
            <li className="pb-2">
              <div className="flex items-start">
                <img src={listImage} alt="list image" className="pr-4" />
                <p className="font-medium leading-tight md:text-xs">
                  And much more!
                </p>
              </div>
            </li>
          </ul>
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="email"
                className="font-Roboto font-bold text-sm block md:text-xs"
              >
                Email Address
              </label>
              {!validEmail && email && (
                <p className="text-red-400 text-xs">Valid email required</p>
              )}
            </div>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              className="w-[105%] pl-4 pt-2 pb-2 border border-slate-300 rounded-[6px]"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="w-[105%] bg-slate-800 text-white h-[2.5rem] rounded-[6px] text-xs hover:bg-gradient-to-r focus:bg-gradient-to-r from-zinc-400 to-red-400"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>

      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  )
}

export default App
