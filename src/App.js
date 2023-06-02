import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { About } from "./pages/About";
import { Login } from "./pages/user/login";
import { UserInfo } from "./pages/user/userInfo";
import { RequireAuth } from "./components/RequireAuth";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Signup } from "./pages/user/signup";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/about/:productId" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
