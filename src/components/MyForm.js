import Input from '@mui/material/Input'
import Container from '@mui/material/Container'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../redux/slice/user'
import { addUserSlice, editUserSlice } from '../redux/slice/users'
import { nanoid } from '@reduxjs/toolkit'
import { CREATE_USER, UPDATE_USER_BY_ID } from '../redux/types'
import Controls from './ui/controls/Controls'
import Divider from '@mui/material/Divider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material'
const MyForm = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleChange = (prop) => (event) => {
    console.log(event.target.value)
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }))
  }
  const handleSubmit = () => {
   console.log(user)
       dispatch({ type: CREATE_USER, user: { ...user }})

      window.location.reload();
    dispatch(
      setUserSlice({
        id: 0,
        name: '',
        gender: '',
        salary: '',
        birthDate:''
      }),
    )
  }
  return (
    <>
      <>
        <TextField
          id="outlined-basic"
          label="Name"
          fullWidth
    variant="outlined"
             style={{ margin: '10px' }}
          onChange={handleChange('name')}
          value={user.name}
          fullWidth
        />
        <TextField
          style={{ margin: '10px' }}
          onChange={handleChange('salary')}
          value={user.salary}
         label="Salary"
          fullWidth
    variant="outlined"
        />
         <TextField
           style={{ margin: '10px' }}
          label="Birth Date"
          value={user.brthDate}
          onChange={handleChange('brthDate')}
fullWidth
        />
  
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={user.gender}
            onChange={handleChange('gender')}
          >
            <div style={{ display: 'flex' }}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </div>
          </RadioGroup>
        </FormControl>
        <Controls.Button
          text="Add New"
          variant="outlined"
          style={{ margin: '10px' }}
          onClick={() => handleSubmit()}
          fullWidth
          variant="contained"
        />
      </>
    </>
  )
}
export default MyForm
