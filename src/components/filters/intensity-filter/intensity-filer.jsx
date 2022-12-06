import './intensity-filter.css'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const IntensityFilter = () => {

    return (
        <FormControl fullWidth>
            <InputLabel id="intensity-input">Intensity</InputLabel>
            <Select
                labelId="intensity"
                id="intensity-input-label"
                label="intensity"
            // onChange={handleChange}
            >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>High</MenuItem>
            </Select>
        </FormControl>
    )
}

export default IntensityFilter