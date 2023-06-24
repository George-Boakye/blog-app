import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Home from "../pages/Home.tsx";

export const routes = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Home/>} />
    ])
)