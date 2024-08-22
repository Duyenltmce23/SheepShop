import { Route, Router, Routes } from "react-router-dom"
import HomePage from "./pages/Client/HomePage/Homepage"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}>
  
          </Route>
        </Routes>
    </>
  )
}

export default App
