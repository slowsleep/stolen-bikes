import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import stoleBike from "../assets/img/stoleBike.jpg";
import rideBike from "../assets/img/rideBike.jpg";

const HomePage = () => {
    return (
        <div>
            <div style={{ margin: "2em 0" }}>
                <Typography variant="h3" textAlign={"center"}>
                    Добро пожаловать!
                </Typography>
                <Typography variant="body1" textAlign={"center"}>
                    У вас украли велосипед, который вы приобрели в нашем магазине?
                    Вы попали по адресу!
                </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around"}}>
                <img
                    style={{ alignSelf: "center" }}
                    width="500"
                    src={stoleBike}
                />
                <img
                    style={{ alignSelf: "center" }}
                    width="500"
                    src={rideBike}
                />
            </div>

            <div style={{ margin: "2em 0" }}>
                <Typography variant="body2" textAlign={"center"}>
                    На данном сайте вы можете оставить ваше сообщение о краже
                    вашего велосипеда и мы поможем вам!
                </Typography>
                <Typography variant="body2" textAlign={"center"}>
                    Оставьте вашу заявку, перейдя на страницу формы, кликнув на
                    &quot;Оставить заявку&quot; в шапке сайта или кликните{" "}
                    <Link to="/create-case">сюда</Link>.
                </Typography>
            </div>
        </div>
    );
};

export default HomePage;
