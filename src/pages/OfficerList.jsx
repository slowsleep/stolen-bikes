import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

import list from "../utils/mock/officerList.json";

const OfficerList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">email</TableCell>
                        <TableCell align="right">firstName</TableCell>
                        <TableCell align="right">lastName</TableCell>
                        <TableCell align="right">password</TableCell>
                        <TableCell align="right">clientId</TableCell>
                        <TableCell align="right">approved</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.officers.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <Link to={`${row.id}`} component={RouterLink}>
                                    {row.id}
                                </Link>
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.firstName}</TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                            <TableCell align="right">{row.password}</TableCell>
                            <TableCell align="right">{row.clientId}</TableCell>
                            <TableCell align="right">{row.approved}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OfficerList;
