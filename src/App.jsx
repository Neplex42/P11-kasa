import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import './App.scss';

import Home from "./pages/Home"
import Accommodation from "./pages/Accommodation"
import About from "./pages/About"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accommodation/:id' element={<Accommodation />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
