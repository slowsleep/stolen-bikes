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

import list from "../utils/mock/caseList.json";

const CaseList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">status</TableCell>
                        <TableCell align="right">licenseNumber</TableCell>
                        <TableCell align="right">type</TableCell>
                        <TableCell align="right">ownerFullName</TableCell>
                        <TableCell align="right">createdAt</TableCell>
                        <TableCell align="right">updatedAt</TableCell>
                        <TableCell align="right">color</TableCell>
                        <TableCell align="right">date</TableCell>
                        <TableCell align="right">officer</TableCell>
                        <TableCell align="right">description</TableCell>
                        <TableCell align="right">resolution</TableCell>
                        <TableCell align="right">удалить</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.cases.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <Link to={`${row.id}`} component={RouterLink}>
                                    {row.id}
                                </Link>
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">
                                {row.licenseNumber}
                            </TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">
                                {row.ownerFullName}
                            </TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.updatedAt}</TableCell>
                            <TableCell align="right">{row.color}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.officer}</TableCell>
                            <TableCell align="right">
                                {row.description}
                            </TableCell>
                            <TableCell align="right">
                                {row.resolution}
                            </TableCell>
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

export default CaseList;
