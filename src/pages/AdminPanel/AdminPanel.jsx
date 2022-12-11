import React from 'react';
import Sidebar from "components/Sidebar/Sidebar";
import {useParams} from "react-router-dom";
import {Col, Row} from "antd";
import Tables from "components/Tables/Tables";
import "./AdminPanel.css";

const AdminPanel = ({id}) => {
    const params = useParams();

    return (
        <Row justify="space-around">
            <Col span={5}>
                <Sidebar/>
            </Col>
            <Col className="tables" span={17}>
                <Tables id={params.id || id}/>
            </Col>
        </Row>
    );
}

export default AdminPanel;