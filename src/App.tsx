import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Team } from "./components/Team";

export function App() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Team />  
      <Highlights />
      <ContactUs />
      <Footer /> 

    </div>
  )
}
