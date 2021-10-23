import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <Link to="/"> Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}
//Link는 라우터에서만 사용이 가능하다.
export default Navigation;