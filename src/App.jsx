import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import UseCase from "./components/UseCase";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
        <Feature />
        <UseCase />
        <Footer />
      </div>
    </main>
  );
};

export default App;
