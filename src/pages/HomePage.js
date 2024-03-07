import React from "react"
import Header from "../components/Header"
import AnimatedCircle from "../components/AnimatedCircle"
import Footer from "../components/Footer"
import video from "../assets/home.mp4"

const HomePage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] overflow-x-hidden bg-[#0a0a12] align-middle flex-col items-center justify-between p-4">
      <span className="flex w-[100vw] align-middle justify-center">
        <Header />
        <AnimatedCircle />
      </span>
      <main className="w-[100vw] h-[100vh] align-middle text-center justify-center items-center mb-20">
        <video
          width="70%"
          autoPlay
          muted
          loop
          className="relative top-[-7em] left-[12em] rounded-[30px] m-0 p-0"
        >
          <source src={video} type="video/mp4" />
          your browser doesn't support
        </video>
        <div className="text-[30px] text-white font-bold font-sans">
          Low-end, with the power of CLI <br />{" "}
          <span className="text-[14px] font-medium flex flex-col">
            Specially helpful for low-end PCs and{" "}
            <span>fo the users who're into linux.</span>
          </span>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
