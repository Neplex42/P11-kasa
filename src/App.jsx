import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./routes/Home"
import Accommodation from "./routes/Accommodation"
import About from "./routes/About"
import Error from "./pages/error/Error"

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
