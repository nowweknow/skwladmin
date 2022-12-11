import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Typography} from "antd";
import {useDispatch} from "react-redux";
import {logout} from "store/signIn/signIn.slice";
import "./Sidebar.css";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className="sidebar-wrapper">
            <Typography>
                <NavLink to="/admin-panel/users">Users</NavLink>
                <NavLink to="/admin-panel/products">Products</NavLink>
            </Typography>
            <div className="logout">
                <Button onClick={logoutHandler}>logout</Button>
            </div>
        </div>
    );
}

export default Sidebar;