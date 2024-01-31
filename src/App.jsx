import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ItemList from "./pages/itemList/ItemList"
import OneItem from "./pages/oneItem/OneItem"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/oneitem/:id" element={<OneItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
