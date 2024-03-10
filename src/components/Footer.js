import React from "react"

const Footer = () => {
  const emailSubscription = (e) => {
    e.preventDefault()
    alert("Thank you for subscribing to our newsletter!")
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center align-middle">
        <h1 className="text-white text-center text-[30px]">threads made</h1>
        <span className="easy_footer text-[3.4em] text-blue-400 font-bold">
          easy.
        </span>
        <form className="flex m-8">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#181823] text-white w-[80%] p-4 rounded-l-full"
          />
          <button
            className="subscribe_btn bg-blue-400 text-white p-4 rounded-r-full font-semibold"
            onClick={emailSubscription}
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="text-white flex w-[60vw] justify-between">
        <div className="flex justify-between w-[40%]">
          <div className="flex flex-col text-left p-2 m-2">
            <h1>Services</h1>
            <span className="my-1">
              <button>Tool</button>
            </span>
            <span className="my-1">
              <button>Documentation</button>
            </span>
            <span className="my-1">
              <button>Contact Us</button>
            </span>
          </div>
          <div className="flex flex-col text-left p-2 m-2">
            <h1 className="text-[1.2em] font-semibold">Company</h1>
            <span className="my-1">
              <button>Pricing</button>
            </span>
            <span className="my-1">
              <button>About Us</button>
            </span>
            <span className="my-1">
              <button>Privacy Policy</button>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-left p-2 m-2">
          <h1 className="text-[1.2em] font-semibold">Follow us</h1>
          <span className="my-1">
            <button>Instagram</button>
          </span>
          <span className="my-1">
            <button>Twitter</button>
          </span>
          <span className="my-1">
            <button>GitHub</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
