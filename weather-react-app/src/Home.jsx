
import Background from '../src/assets/background.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Home.css'

function Home() {

  const formatHrs = 0;

  return (
    <div>
      <FormControl>
        <FormLabel style={{paddingBottom: 10}}>What City Are You Located In?</FormLabel>
        <TextField></TextField>
        <FormLabel style={{paddingBottom: 10, paddingTop: 10}} id="time-format-select-label">Preffered Time Format</FormLabel>
        <Select
          labelId="time-format-select-label"
          id="time-format-select"
          value={{formatHrs}}
        >
          <MenuItem value={12}>12 Hr</MenuItem>
          <MenuItem value={24}>24 Hr</MenuItem>
        </Select>
        <Button>Submit</Button>
      </FormControl>
    </div>
  )
}

export default Home
