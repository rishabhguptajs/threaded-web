import React from "react"

const Features = ({ name, description, logoURL }) => {
  return (
    <div className="p-4 w-[25%] transition-all cursor-pointer hover:bg-[#8793ff] rounded-lg text-white border-2 border-[#8793ff]">
      <div className="flex flex-row items-center text-center justify-left">
        <span className="p-2 m-2 bg-[#8793ff] text-white rounded-full align-middle justify-center items-center">
          {logoURL}
        </span>
        <span className="text-xl">{name}</span>
      </div>
      <p className="m-2 text-left">{description}</p>
    </div>
  )
}

export default Features
