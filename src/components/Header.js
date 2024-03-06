import React from "react"

const Header = () => {
  return (
    <div className="fixed z-50 flex flex-row shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,178,255,0.15)] align-middle items-center p-2  w-[95vw] rounded-lg justify-between bg-[#ffffff] text-[#1b1b2f] cursor-default">
      <h1 className="my-2 mx-4 font-bold text-[20px] cursor-pointer">
        Threaded
      </h1>
      <ul className="flex flex-row w-fit m-4">
        <li className="cursor-pointer mx-2 hover:underline" href="/solution">
          Solution
        </li>
        <li className="cursor-pointer mx-2 hover:underline">Documentation</li>
        <li className="cursor-pointer mx-2 hover:underline">Pricing</li>
        <li className="cursor-pointer mx-2 hover:underline">Contact Us</li>
      </ul>
      <div>
        <button className="text-[#1b1b2f] font-semibold mx-2 rounded-lg py-2 px-4 cursor-pointer">
          Sign Up
        </button>
        <button className="bg-[#1b1b2f] text-[#d9d9ff] mx-2 rounded-lg py-2 transition-all px-4 cursor-pointer hover:translate-y-[-2px]">
          Log In
        </button>
      </div>
    </div>
  )
}

export default Header
