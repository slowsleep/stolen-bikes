import Container from "@mui/material/Container";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = () => {
    let location = useLocation();

    return (
        <div>
            <Header />
            <main>
                <Container
                    maxWidth={
                        location.pathname === "/" ||
                        location.pathname === "/cases" ||
                        location.pathname === "/officers"
                            ? "lg"
                            : "sm"
                    }
                >
                    <Outlet />
                </Container>
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;
