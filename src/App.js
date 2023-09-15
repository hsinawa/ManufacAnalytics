import HomeScreen from "./Components/homeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importing Components
import AlchoholTable from './Components/ClassTable'
import GammaTable from "./Components/gammaTable";

//Importing Static Files
import textData from './Static Files/staticText.json'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`${textData.routes.home}`} element={<HomeScreen />}></Route>
          <Route path={`${textData.routes.class}`} element={<AlchoholTable />}></Route>
          <Route path={`${textData.routes.gamma}`} element={<GammaTable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
