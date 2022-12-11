import React, {useEffect} from 'react';
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "store/listUsers/listUsers.slice";
import {loginUserSelector} from "store/signIn/signIn.selector";
import {listOfUsersSelector} from "store/listUsers/listUsers.selector";
import api from "service/api";
import "./Users.css";

const IsBlocked = ({dataIndex, defaultFilteredValue}) => {
    const {userToken} = useSelector(loginUserSelector);
    const dispatch = useDispatch();

    const changeBlock = async () => {
        const {id} = defaultFilteredValue;
        await api.changeIsBlocked(userToken, id);
        dispatch(fetchUsers({userToken}));
    }

    return (
        <a onClick={() => changeBlock()}>{
            dataIndex ? " unblock " : " block "
        }</a>
    );
}

const columns = [
    {
        title: 'Profile Name',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Action',
        dataIndex: 'is_blocked',
        render: (dataIndex, defaultFilteredValue) => <IsBlocked dataIndex={dataIndex} defaultFilteredValue={defaultFilteredValue}/>,
    }
];


const UsersTable = () => {
    const dispatch = useDispatch();
    const {userToken} = useSelector(loginUserSelector);
    const {users} = useSelector(listOfUsersSelector);

    useEffect(async () => {
        dispatch(fetchUsers({userToken}));
    }, []);

    return (
        <Table dataSource={users} rowKey={(user) => user.id} columns={columns} pagination={{ pageSize: 15, position: ["bottomCenter"] }} scroll={{y:"100vh"}}/>
    );
}

export default UsersTable;