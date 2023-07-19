import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Created } from "./components";
import { Airbnb, FilmStudio, Whatsapp, Home } from "./pages";

const App = () => {
  console.clear();
  return (
    <BrowserRouter>
      {/* <div className="relative z-0">
        <Navbar />
        <div className="">
          <Hero />
        </div>
        <div className="bg-white bg-no-repeat bg-center md:min-h-screen">
          <About />
        </div>
        <div className="bg-[#F6F6F6] lg:min-h-screen">
          <Tech />
        </div>
        <div className="bg-white">
          <Experience />
        </div>
        <div className="bg-[#F6F6F6]">
          <Works />
        </div>
        <Feedbacks />
        <div className="bg-white">
          <Contact />
          <StarsCanvas />
        </div>
        <Created />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmstudio" element={<FilmStudio />} />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


// bg-hero-pattern