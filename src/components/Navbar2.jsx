import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Travel from "../pages/Travel";
import Contact from "../pages/Contact";
import Food from "../pages/Food";
const Navbar2 = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav className="flex justify-between px-10 bg-green-300 py-3 font-bold">
            <div className="">
              <Link to="/">Food & Travel</Link>
            </div>
            <div className="gap-10 flex">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/food">Food</NavLink>
              <NavLink to="/travel">Travel</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/food" element={<Food />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Navbar2;
