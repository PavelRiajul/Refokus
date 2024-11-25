
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import Marquees from "./Components/Marquees"
import Navbar from "./Components/Navbar"
import Products from "./Components/Products"

import Stripes from "./Components/Stripes"
import Work from "./Components/Work"


function App() {
  return (
    <div className="w-full bg-zinc-900 text-white font-['satoshi']">
     <Navbar/>
     <Work/>
     <Stripes/>
     <Products/>
     <Marquees/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default App