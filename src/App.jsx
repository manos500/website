import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar} from './components';

const App = () => {
  return (
    <BrowserRouter>
    
      <div className="relative bg-[#050817ff]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          
          <Navbar/>
          <Hero/>
        </div>     

        <Experience/>
        
        <div className="relative z-0 ">
            <Contact/>
           
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App