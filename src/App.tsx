import { Footer } from "./components/sections/footer/Footer";
import { Header } from "./components/sections/header/Header";
import { Hero } from "./components/sections/hero/Hero";
import { History } from "./components/sections/history/History";
import { Tecnics } from "./components/sections/tecnics/Tecnics";
import { Wizards } from "./components/sections/wizards/Wizards";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <History/>
      <Wizards />
      <Tecnics/>
      <Footer/>
    </>
  );
}

export default App;
