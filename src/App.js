import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import AnimatedCircle from "./components/AnimatedCircle"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <main
        className={`flex h-[100vh] w-[100vw] overflow-x-hidden bg-[#0a0a12] flex-col items-center justify-between p-4`}
      >
        <Header />
        <AnimatedCircle />
        <Footer />
      </main>
    </div>
  )
}

export default App
