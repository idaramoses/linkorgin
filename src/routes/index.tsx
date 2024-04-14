import { createBrowserRouter, createRoutesFromElements, Route, useRouteError } from "react-router-dom";
import SignUp from "../pages/SignUp/personalInformation";
import BasicDetails from "../pages/SignUp/basicDetails";
import Language from "../pages/SignUp/language";
import Education from "../pages/SignUp/education";
import Housing from "../pages/SignUp/housing";
import SocialIntegration from "../pages/SignUp/social";
import SupportNeeds from "../pages/SignUp/supportNeeds";


const ErrorElement = () => {
    let error = useRouteError();
    console.error(error);

    return <div>Dang!</div>
}

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" errorElement={<ErrorElement />} >
        <Route index element={<SignUp/>} />

        <Route path="/basic-details" element={<BasicDetails/>} />
        <Route path="/language" element={<Language/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/housing" element={<Housing/>} />
        <Route path="/social-integration" element={<SocialIntegration/>} />
        <Route path="/support-needs" element={<SupportNeeds/>} />
    </Route>
))