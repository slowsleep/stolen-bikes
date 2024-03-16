import { Button, FormControl, TextField } from "@mui/material";
import styles from "../common.module.css";

const SignIn = () => {
  return (
    <div>
        <h1>Форма входа</h1>
        <form className={styles.form}>
            <FormControl>
                <TextField label="E-mail" name="email" required />
            </FormControl>
            <FormControl>
                <TextField label="Пароль" name="password" required />
            </FormControl>
            <Button variant="contained">Вход</Button>
        </form>
    </div>
  )
}

export default SignIn
