import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CreateCase from "./pages/CreateCase";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CaseList from "./pages/CaseList";
import OfficerList from "./pages/OfficerList";
import SingleCase from "./pages/SingleCase";
import SingleOfficer from "./pages/SingleOfficer";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="create-case" element={<CreateCase />} />
    <Route path="sign-up" element={<SignUp />} />
    <Route path="sign-in" element={<SignIn />} />
    <Route path="cases" element={<CaseList />} />
    <Route path="cases/:id" element={<SingleCase />} />
    <Route path="officers" element={<OfficerList />} />
    <Route path="officers/:id" element={<SingleOfficer />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
