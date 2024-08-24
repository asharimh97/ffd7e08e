import "./App.css";
import About from "./components/about";
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
      <Footer />
    </>
  );
}

export default App;
