import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Pricing from "./components/pricing";

function App() {
  return (
    <>
      <div id="container">
        <Header />
        <About />
        <Pricing />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
