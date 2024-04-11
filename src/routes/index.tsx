import { createBrowserRouter, createRoutesFromElements, Route, useRouteError } from "react-router-dom";
import SignUp from "../pages/SignUp";


const ErrorElement = () => {
    let error = useRouteError();
    console.error(error);

    return <div>Dang!</div>
}

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" errorElement={<ErrorElement />} >
        <Route index element={<SignUp/>} />

        {/* <Route path="/login" element={<SignUp/>} /> */}
    </Route>
))