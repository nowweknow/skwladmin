import React, {useEffect} from 'react';
import {Checkbox, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginUserSelector} from "store/signIn/signIn.selector";
import {fetchProducts} from "store/listProducts/listProducts.slice";
import {listOfProductsSelector} from "store/listProducts/listProducts.selector";
import api from "service/api";
import "./Product.css";

const IsAdvertised = ({dataIndex, defaultFilteredValue}) => {
    const {userToken} = useSelector(loginUserSelector);
    const dispatch = useDispatch();

    const changeBlock = async () => {
        const {id} = defaultFilteredValue;
        await api.changeIsTranding(userToken, id);
        dispatch(fetchProducts({userToken}));
    }
    useEffect(async () => {
        dispatch(fetchProducts({userToken}));
    }, [dataIndex]);

    return (
        <Checkbox checked={dataIndex} onClick={() => changeBlock()}/>
    );
}

const columns = [
    {
        title: 'Video',
        dataIndex: 'link',
        key: 'link',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Product link',
        dataIndex: 'product_link',
        key: 'product_link  ',
    },
    {
        title: 'Advertised',
        dataIndex: 'isTranding',
        key: 'x',
        render: (dataIndex, defaultFilteredValue) => <IsAdvertised dataIndex={dataIndex} defaultFilteredValue={defaultFilteredValue}/>,
    }
];

const ProductsTable = () => {
    const dispatch = useDispatch();
    const {userToken} = useSelector(loginUserSelector);
    const {products} = useSelector(listOfProductsSelector);

    useEffect(async () => {
        dispatch(fetchProducts({userToken}));
    }, []);

    return (
        <Table dataSource={products} rowKey={(product) => product.id} columns={columns} pagination={{ pageSize: 15, position: ["bottomCenter"] }} scroll={{y:"100vh"}}/>
    );
}

export default ProductsTable;