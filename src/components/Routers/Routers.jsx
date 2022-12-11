import React from 'react';
import AdminPanel from "pages/AdminPanel/AdminPanel";
import SignIn from "pages/SignIn/SignIn";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {loginUserSelector} from "store/signIn/signIn.selector";
import Page404 from "pages/Page404/Page404";

const Routers = () => {
    const {userToken} = useSelector(loginUserSelector);
    return (
        userToken
            ? (
                <Routes>
                    <Route exact path="/" element={<AdminPanel id="users"/>} />
                    <Route exact path="/admin-panel/:id" element={<AdminPanel />} />
                    <Route
                        path="*"
                        element={<Page404/>}
                    />
                </Routes>
            )
            : (
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route
                        path="*"
                        element={<Page404/>}
                    />
                </Routes>
            )
    );

}

export default Routers;