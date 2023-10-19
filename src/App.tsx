import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarContainer from "./containers/NavbarContainer";
import HomeContainer from "./containers/HomeContainer";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContainer from "./containers/CartContainer";
import CategoryContainer from "./containers/CategoryContainer";
import CheckOutContainer from "./containers/CheckOutContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/search/:value" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<CategoryContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckOutContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
