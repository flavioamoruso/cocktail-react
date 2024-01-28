import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";


function App() {

  return <Router className='App'>
    <Navbar/>
    <Sidebar/>
    <Footer/>
    <Routes>
    <Route path="/" Component={HomeScreen} />
    <Route path="/about" Component={AboutScreen}/>
    <Route path="/contattaci" Component={ContactScreen}/>
    <Route path="/cocktail/:id" Component={SingleCocktailScreen}/>
    <Route path="*" Component={ErrorScreen}/>
    </Routes>
  </Router>;
}

export default App;
