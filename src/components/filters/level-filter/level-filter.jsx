import './level-filter.css'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const LevelFilter = () => {

    return (
        <FormControl fullWidth>
            <InputLabel id="level-input">Level</InputLabel>
            <Select
                labelId="level"
                id="level-input-label"
                label="Level"
            // onChange={handleChange}
            >
                <MenuItem value={1}>Beginner</MenuItem>
                <MenuItem value={2}>Intermediate</MenuItem>
                <MenuItem value={3}>Advanced</MenuItem>
            </Select>
        </FormControl>
    )
}

export default LevelFilter