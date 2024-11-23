import Navbar from "./Components/Navbar"
import Stripes from "./Components/Stripes"
import Work from "./Components/Work"


function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white font-['satoshi']">
     <Navbar/>
     <Work/>
     <Stripes/>

    </div>
  )
}

export default App