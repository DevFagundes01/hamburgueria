import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home"
import Order from "./pages/orders";

function myRoutes() {
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<Home></Home>}></Route>
                <Route  path="/orders" element={<Order></Order>}></Route>
            </Routes>
        </Router>
    )
}

export default myRoutes