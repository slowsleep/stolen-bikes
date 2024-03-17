import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import list from "../utils/mock/officerList.json";

// список с автоинкрементрованным порядковым номером сотрудника в списке
const myOfficerList = list.officers.map((item, index) => ({autoIndex: index + 1, ...item}))

const OfficerList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell align="right">firstName</TableCell>
                        <TableCell align="right">lastName</TableCell>
                        <TableCell align="right">email</TableCell>
                        <TableCell align="right">approved</TableCell>
                        <TableCell align="right">удалить</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myOfficerList.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <Link to={`${row.id}`} component={RouterLink}>
                                        {row.autoIndex}
                                </Link>
                            </TableCell>
                            <TableCell align="right">{row.firstName}</TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.approved}</TableCell>
                            <TableCell align="right">
                                <Button color="error">&#215;</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OfficerList;
