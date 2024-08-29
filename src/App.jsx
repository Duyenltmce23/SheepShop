import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/Client/HomePage/Homepage';
import ProductType from './pages/Client/ProductType/ProductType';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/nu' element={<ProductType />}></Route>
        <Route path='/nam' element={<ProductType />}></Route>
      </Routes>
    </>
  );
}

export default App;
