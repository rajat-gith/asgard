import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";    
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import GeographyScreen from "./screens/GeographyScreen";
import CultureScreen from "./screens/CultureScreen";
import LanguageScreen from "./screens/LanguageScreen";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/history" element={<HistoryScreen />} />
          <Route exact path="/geography" element={<GeographyScreen />} />
          <Route exact path="/culture" element={<CultureScreen/>} />
          <Route exact path="/language" element={<LanguageScreen/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
