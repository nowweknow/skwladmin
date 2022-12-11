import React from 'react';
import {Result} from "antd";
import {NavLink} from "react-router-dom";

const Page404 = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<NavLink to="/admin-panel/" type="primary">Back Home</NavLink>}
        />
    );
}

export default Page404;