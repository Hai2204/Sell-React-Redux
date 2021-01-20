import React from "react";
import HomePage from './pages/HomePage/HomePage';
import NotFountPage from './pages/NotFound/NotFountPage'
import ProductsActionPage from "./pages/ProductActionPage/ProductsActionPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const routes = [
    {
        path: '/',
        exact: true,
        main : () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main : () => <ProductListPage />
    },
    {
        path: '/product/add-product',
        exact: false,
        main : ({history}) => <ProductsActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main : ({match, history}) => <ProductsActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main : () => <NotFountPage />
    }
];
export default routes;