import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  Controls from './ui/controls/Controls'
import { useDispatch, useSelector } from 'react-redux';
import { setUserSlice } from '../redux/slice/user';
import { deleteUserSlice } from '../redux/slice/users';
import Popup from './ui/Popup'
import Moment from 'react-moment';
import Norecords from './ui/Norecords'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import Button from '@mui/material/Button';
import { DELETE_USER_BY_ID, GET_USERS } from '../redux/types';
import UserUpdateForm  from './updateForm'
export default function MyTable() {
      const [openPopup, setOpenPopup] = React.useState(false)
      const[user,setUser]=React.useState('')
      const updateUser=(row)=>{
          setUser(row)
          setOpenPopup(true)
      }
    const rows = useSelector(state => state.users)
    const dispatch = useDispatch()
    const[userData,setUserData]=React.useState([])
    React.useEffect(() => {
        setUserData(rows)
    dispatch({ type: GET_USERS })}
    
    , [])
    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">salary</TableCell>
                                <TableCell align="right">gender</TableCell>
                        <TableCell align="right">Birth Date</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.salary}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                               <TableCell align="right">
                               <Moment format="YYYY/MM/DD">{row.birthDate}</Moment>
                              
                               </TableCell>
                            <TableCell align="right">
                                 <Controls.ActionButton
                        color="secondary"
                        title="Update" onClick={() =>updateUser(row)}>
                            <EditIcon/>
                            </Controls.ActionButton>
                            </TableCell>
                            <TableCell align="right">

                                 <Controls.ActionButton
                        color="secondary"
                        title="delet"  onClick={() => dispatch({ type: DELETE_USER_BY_ID, id: row._id })} ><DeleteOutlineIcon/> </Controls.ActionButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Popup
        title="User Update Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <UserUpdateForm
           setOpenPopup={setOpenPopup}
           user={user}
        />
      </Popup>
      
     
        </div>
    );
}