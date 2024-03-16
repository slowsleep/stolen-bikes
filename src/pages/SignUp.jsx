import { Button, FormControl, TextField } from "@mui/material";
import styles from "../common.module.css";
const SignUp = () => {
  return (
    <div>
        <h1>Форма регистрации</h1>
        <form className={styles.form}>
            <FormControl>
                <TextField label="E-mail" name="email" required />
            </FormControl>
            <FormControl>
                <TextField label="Пароль" name="password" required />
            </FormControl>
            <FormControl sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <TextField sx={{minWidth: "15em"}} label="Имя" name="name" />
                <TextField sx={{minWidth: "15em"}} label="Фамилия" name="surname" />
            </FormControl>
            <FormControl>
                <TextField label="Client ID" name="clienId" required />
            </FormControl>
            <Button variant="contained">Зарегистрироваться</Button>
        </form>
    </div>
  )
}

export default SignUp
