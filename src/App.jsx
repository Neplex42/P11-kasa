import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import Home from "./pages/Home"
import Accommodation from "./pages/Accommodation"
import About from "./pages/About"
import Error from "./pages/Error"

import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accommodation/:id' element={<Accommodation />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
