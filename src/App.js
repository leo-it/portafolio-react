import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages";
import Contact from "./pages/contact";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
