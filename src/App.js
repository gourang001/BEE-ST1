import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";
// import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import BookDetail from "./Pages/BookDetail";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/addbook" element={<AddBooks />}></Route>
        <Route path="/updateBook/:id" element={<BookDetail />} exact></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
