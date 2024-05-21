"use Client"

import Info from "./Components/Info"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Technologies from "./Components/Technologies"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased ">
      <div className="fixed top-0 -z-10 h-full w-full"> 
         {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#00091d_1px] bg-[radial-gradient(#ffffff33_1px,#00091d_0.05px)] "></div> */}
          <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
     
      <div className="container mx-auto px-8">
        <Navbar />
        <Info />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact/>
      </div>
     
    </div>
  )
}

export default App