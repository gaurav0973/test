import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


function AppRoutes({user, setUser}) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;