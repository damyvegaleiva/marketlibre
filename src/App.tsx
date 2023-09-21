import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ItemListContainer from "./containers/ItemListContainer";
import NavbarContainer from "./containers/NavbarContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/search/:value" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
