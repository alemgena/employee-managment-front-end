import { set } from 'date-fns'
import React from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000/api'
import Controls from './ui/controls/Controls'
import { TextField, Grid } from '@mui/material'
function updateForm({ user }) {
  const [userData, setUserData] = React.useState('')
  React.useEffect(() => {
    setUserData(user)
  }, [])
  const [name, setName] = React.useState(user.name)
  const [salary, setSalary] = React.useState(user.salary)
  const [gender, setGender] = React.useState(user.gender)
  const [birthDate, setBirthDate] = React.useState(user.birthDate)
const sendRequest=()=>{
  axios.put(`/users/${user.name}`
    ,{
        name:name,
        salary:salary,
        gender:gender,
        birthDate:birthDate
    }).then((response)=>{
console.log(response)

      window.location.reload();
    })
}
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Name"
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => {
              setSalary(e.target.value)
            }}
            value={salary}
            label="Salary"
            fullWidth
            variant="outlined"
          />
        </Grid>
            <Grid item xs={12} md={6}>
  <TextField
            onChange={(e) => {
              setGender(e.target.value)
            }}
            value={gender}
            label="Gender"
            fullWidth
            variant="outlined"
          />
                </Grid>
                    <Grid item xs={12} md={6}>
  <TextField
            onChange={(e) => {
              setBirthDate(e.target.value)
            }}
            value={birthDate}
            label="Birth Date"
            fullWidth
            variant="outlined"
          />
                        </Grid>
                        <Grid item xs={12}>
        <Controls.Button
          color="primary"
          variant="outlined"
        onClick={sendRequest}
          text={'Edit'
          }
        />
      </Grid>
      </Grid>
    </div>
  )
}

export default updateForm
