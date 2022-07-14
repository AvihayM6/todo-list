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
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {
    deleteItem,
    setSelectedItemId,
    saveItem,
    updateSearchTerm,
    printState
} from '../Redux/listSlice'
import { useEffect } from 'react';




function createData(name) {
    const deleteIcon = <IconButton><DeleteOutlineIcon /></IconButton>
    const checkIcon = <Checkbox />
    return { name, deleteIcon, checkIcon };
}

const rows = [
    createData('Lorem ipsum dolor sit amet.',),
    createData('Ice cream sandwich'),
    createData('Eclair'),
    createData('Cupcake'),
    createData('Gingerbread'),
    createData('asdasd'),
    createData('Cupcasdddake'),
    createData('Gingeaaaarbread'),

];

const MyTextField = styled(TextField)({
    marginLeft: "33%"
})

const MainPanel = () => {
    const dispatch = useDispatch() //function to read the reduce of Redux
    const items = useSelector(state => state.itemSlice) //function to read the state of Redux

    useEffect(() => {
        //console.log(dispatch(printState()));
    })
    return (
        <div className='main-panel-container'>
            <MyTextField
                id="standard-name"
                label="Add todo"
                InputProps={{ endAdornment: <IconButton><AddIcon /></IconButton> }}
            />
            <TableContainer className="custom-scrollbar" component={Paper} sx={{ display: "flex", justifyContent: "center", boxShadow: "none", height: "65%", background: "none" }}>
                <Table aria-label="simple table" sx={{ maxWidth: "90%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell width="10%"><b>Tasks</b></TableCell>
                            <TableCell width="1%" align="center"><b>Delete/Finish</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="center">
                                    <div className='icons-container'>
                                        <div className='delete-icon'>
                                            {row.deleteIcon}
                                        </div>
                                        {row.checkIcon}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MainPanel;