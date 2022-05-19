import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarcomp from "./components/navbarcomp";
import Home from "./components/Home";
import HomeJuz from "./components/HomeJuz";
import Juz from "./components/Juz";
import Surah from "./components/Surah";
import Profile from "./components/Profile";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";




function App() {
  return (
      <Router>
          <div className="App">
        <Navbarcomp/>
              <div className="content">
                  <Switch>
                      <Route exact path ="/" exact>
                    <Home/>
                      </Route>
                      <Route exact path ="/HomeJuz" exact>
                          <HomeJuz/>
                      </Route>
                      <Route exact path ="/Profile" exact>
                          <Profile/>
                      </Route>
                      <Route exact path ="/Juz:id" exact>
                          <Juz/>
                      </Route>
                      <Route exact path ="/Surah:id" exact>
                          <Surah/>
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
