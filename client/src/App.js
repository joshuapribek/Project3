import NavBar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Wanderlist } from "./components/pages/Artistfind";




function App() {
  return (
    <>
    <Router>
      <NavBar />
      <div className="pages">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Artistfind" component={Wanderlist}/>
      <Route path="*" component={Home} />

    </Switch>
    </div>
    </Router>
    </>
  )
}





export default App;