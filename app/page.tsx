import Direction from "./components/Direction"
import Command from "./components/Command";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Clients from "./components/Clients"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";


export default function Home() {
  return (
    <main>    
      <HomePage/>
      <Direction />
      <Command/>
      <Services/>
      <Tools/>
      <Clients/>
      <Portfolio/>
      <Contact/>
    </main>
  );
}
