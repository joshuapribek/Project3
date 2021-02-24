import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import music from "./pages/music";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/app" component={music} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
