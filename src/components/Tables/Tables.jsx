import React from 'react';
import UsersTable from "components/Users/Users";
import ProductsTable from "components/Products/Products";

const Tables = ({id}) => {
    let table;

    switch(id) {
        case "users":
            table = <UsersTable/>
            break;
        case "products":
            table = <ProductsTable />
            break;
        default:
            table = null;
    }

    return (
        <div>
            {table}
        </div>
    );
}

export default Tables;