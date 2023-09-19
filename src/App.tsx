import "./App.css";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import {} from "react-router-dom";
import Layout from "./Layout/Layout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MainPage from "./Pages/MainPage/MainPage";
import GoodsPage from "./Pages/GoodsPage/GoodsPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SearchPage from "./Pages/SearchPage/SearchPage";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="goodspage/:category" element={<GoodsPage />} />
                <Route path="goodspage/:title/:id" element={<ProductPage />} />
                <Route path="search" element={<SearchPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </>
    )
);

const App: React.FC = () => {
    return (
        <>
            <RouterProvider router={Router} />
        </>
    );
};

export default App;
