import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Details from './components/Details';

function App() {
  // const location = useLocation();
  // const showHeaderFooter = location.pathname !== "/landing";
  return (
    <BrowserRouter> 
      <Routes>
      {/* {showHeaderFooter && <Header2 />} */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

// function MainRoutes(){
//   return (
//     <BrowserRouter> 
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/about" element={<About />} />
//         <Route exact path="/details" element={<Details />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

export default App