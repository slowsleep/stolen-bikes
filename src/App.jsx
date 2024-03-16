import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CreateCase from "./pages/CreateCase";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="create-case" element={<CreateCase />} />
    <Route path="sign-up" element={<SignUp />} />
    <Route path="sign-in" element={<SignIn />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
