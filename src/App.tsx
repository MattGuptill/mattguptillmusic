import { Route, Routes } from "react-router-dom"
import {Navbar} from "./components/navbar/navbar"
import { About } from "./components/pages/About"
import { Contact } from "./components/pages/Contact"
import { Music } from "./components/pages/Music"
import { Home } from "./components/pages/Home"




function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </div>

    {/* stying */}
      <style jsx>{`
        App {
          background-color: #fefefe;
          height: 100%;
          width: 100%;
          
        }
        `}</style>
    </>
  )
}

export default App
