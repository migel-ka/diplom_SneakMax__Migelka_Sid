import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductCard from "./pages/Home";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import SneakerPage from "./SneakerPage/SneakerPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        //loader: Loader,
        children: [
           { index: true, element: <Home />},
           { path: "ProductCard", element: <ProductCard />},
           { path: "Basket", element: <Basket />},
           { path: "sneaker/:id", element: <SneakerPage />},
           { path: "*", element: <NotFound />},
        ]
    }
]);

export default router;