import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import "./header.css";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Link to="/" component={RouterLink} underline="none">
                    <h1>StolenBikes</h1>
                </Link>
                <nav>
                    <Link to="/create-case" component={RouterLink}>
                        Оставить заявку
                    </Link>
                </nav>
                <div>
                    <Button variant="contained">Войти</Button>
                    <Button variant="contained">Зарегистрироваться</Button>
                </div>
            </Box>
        </header>
    );
};

export default Header;
