import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login";
import "./style.scss"
import "./firebase.js"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
