
import Navbar from "./Components/Navbar"
import Products from "./Components/Products"

import Stripes from "./Components/Stripes"
import Work from "./Components/Work"


function App() {
  return (
    <div className=" bg-zinc-900 text-white font-['satoshi']">
     <Navbar/>
     <Work/>
     <Stripes/>
     <Products/>
    </div>
  )
}

export default App