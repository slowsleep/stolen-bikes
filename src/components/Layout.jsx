import Container from "@mui/material/Container";
import Header from "./Header/Header";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Container maxWidth="sm">
                    <Outlet/>
                </Container>
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;
