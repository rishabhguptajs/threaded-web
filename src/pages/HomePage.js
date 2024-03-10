import React from "react"
import Header from "../components/Header"
import AnimatedCircle from "../components/AnimatedCircle"
import Footer from "../components/Footer"
import video from "../assets/home.mp4"
import Features from "../components/Features"
import { IoCreate } from "react-icons/io5"
import { GrIntegration } from "react-icons/gr"
import { MdOfflinePin } from "react-icons/md"
import { BiSolidCustomize } from "react-icons/bi"

const HomePage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] overflow-x-hidden bg-[#000000] align-middle flex-col items-center justify-between p-4">
      <span className="flex w-[100vw] align-middle justify-center">
        <Header />
        <AnimatedCircle />
      </span>
      <main className="w-[100vw] h-[100vh] flex flex-col align-middle text-center justify-center items-center mb-20">
        <div>
          <video
            width="70%"
            autoPlay
            muted
            loop
            className="relative top-[-3em] left-[12em] rounded-[30px] m-0 p-0"
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
          <button className=" m-8 p-4 bg-white font-semibold text-black transition-all rounded-xl hover:-translate-y-1 hover:scale-105">
            Get Started.
          </button>
        </div>
        <div className="features-section justify-evenly flex flex-col gap-4 m-8 p-4 bg-[#07113767]">
          <span className="text-white z-50 transition-all text-4xl m-4 hover:text-[#8793ff] cursor-pointer">
            Features
          </span>
          <div className="flex flex-row gap-4">
            <Features
              name={"Thread Creation"}
              description={
                "Create captivating threads effortlessly, right from your command line. Say goodbye to tab hopping and app juggling—compose and share your thoughts seamlessly, straight from your terminal."
              }
              logoURL={<IoCreate />}
            />
            <Features
              name={"Twitter Integration"}
              description={
                "Tweet effortlessly from your command line. No more screen switching or multitasking—sync your CLI tool with Twitter seamlessly. Connect, compose, and conquer Twitter from your cozy terminal."
              }
              logoURL={<GrIntegration />}
            />
            <Features
              name={"Offline Mode"}
              description={
                "Don't let Wi-Fi woes stifle your genius! With our offline mode, inspiration strikes wherever you roam. Draft your threads offline, let your creativity soar, and when the time is ripe, share your masterpieces to the world."
              }
              logoURL={<MdOfflinePin />}
            />
            <Features
              name={"Customization"}
              description={
                "Gain insights into your Twitter performance directly from your command line. Our analytics dashboard provides real-time metrics on your tweets, engagement rates, and audience demographics."
              }
              logoURL={<BiSolidCustomize />}
            />
          </div>
        </div>
        <div className="">
          <span className="text-white">How It Works?</span>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
