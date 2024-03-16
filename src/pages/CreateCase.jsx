import {
    FormControl,
    InputLabel,
    TextField,
    FormLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    Button
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateCase = () => {
    return (
        <div>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1em",
                    margin: "1em",
                }}
            >
                <FormControl fullWidth>
                    <TextField id="licence" label="Номер лицензии" name="licenseNumber" required />
                </FormControl>

                <FormControl fullWidth>
                    <TextField id="fullname" label="ФИО клиента" name="ownerFullName" required />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="type-label">Тип велосипеда</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type"
                        label="Тип велосипеда"
                        name="type"
                        required
                    >
                        <MenuItem value={"general"}>general</MenuItem>
                        <MenuItem value={"sport"}>sport</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="color-label">Цвет велосипеда</InputLabel>
                    <Select
                        labelId="color-label"
                        id="color"
                        label="Цвет велосипеда"
                        name="color"
                    >
                        <MenuItem value={"black"}>черный</MenuItem>
                        <MenuItem value={"white"}>белый</MenuItem>
                        <MenuItem value={"red"}>красный</MenuItem>
                        <MenuItem value={"blue"}>синий</MenuItem>
                        <MenuItem value={"green"}>зеленый</MenuItem>
                    </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Дата кражи" format="DD-MM-YYYY" name="date" />
                    </DemoContainer>
                </LocalizationProvider>

                <FormControl>
                    <FormLabel id="description-label">Дополнительная информация</FormLabel>
                    <TextareaAutosize
                        id="description"
                        labelId="description-label"
                        minRows={2}
                        name="description"
                        placeholder="Ваша дополнительная информация..."
                    />
                </FormControl>

                <Button variant="contained" color="success">
                    Отправить
                </Button>
            </form>
        </div>
    );
};

export default CreateCase;
