import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import '../style/MainPanel.css'
import { styled } from '@mui/system';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function createData(name, deleteIcon, checkIcon) {
    return { name, deleteIcon, checkIcon };
}

const rows = [
    createData('Lorem ipsum dolor sit amet.', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
    createData('Ice cream sandwich', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
    createData('Eclair', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
    createData('Cupcake', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
    createData('Gingerbread', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
    createData('Eclair', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
    createData('Cupcake', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
    createData('Gingerbread', <IconButton><DeleteOutlineIcon /></IconButton>, <Checkbox />),
];

const MyTextField = styled(TextField)({
    marginLeft: "33%"
})

const MainPanel = () => {
    return (
        <div className='main-panel-container'>
            <MyTextField
                id="standard-name"
                label="Add todo"
                InputProps={{ endAdornment: <IconButton><AddIcon /></IconButton> }}
            />
            <TableContainer component={Paper} sx={{ display: "flex", justifyContent: "center", boxShadow: "none" }}>
                <Table aria-label="simple table" sx={{ maxWidth: "80%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell width="10%"><b>Tasks</b></TableCell>
                            <TableCell width="1%" align="center"><b>Delete/Check</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="center">{row.deleteIcon}{row.checkIcon}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MainPanel;