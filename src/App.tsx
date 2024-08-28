import "./App.css"
// FIRST IMPORT THE COMPONENTS
import { Brand, CTA, Navbar } from "./components";

// THEN WE IMPORT THE CONTAINERS
import { About, Blog, Features, Footer, Future_Possibilities, Header } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient_background">
        <Navbar />
        <Header />
      </div>

      <div>
        <Brand />
        <About />
        <Features />
        <Future_Possibilities />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
