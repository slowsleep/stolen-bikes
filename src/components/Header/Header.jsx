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
                <Link to="/" component={RouterLink} underline="none" color="#F2E9E4">
                    <h1>StolenBikes</h1>
                </Link>
                <nav style={{display: "flex", columnGap: "1em"}}>
                    <Link to="/create-case" component={RouterLink}>
                        Оставить заявку
                    </Link>
                    <Link to="/cases" component={RouterLink}>
                        Кражи
                    </Link>
                    <Link to="/officers" component={RouterLink}>
                        Сотрудники
                    </Link>
                </nav>
                <div>
                    <Link to="sign-in" component={RouterLink}><Button>Войти</Button></Link>
                    <Link to="sign-up" component={RouterLink}><Button>Зарегистрироваться</Button></Link>
                </div>
            </Box>
        </header>
    );
};

export default Header;
