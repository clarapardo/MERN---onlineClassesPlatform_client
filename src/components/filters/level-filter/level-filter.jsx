import './level-filter.css'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState, useEffect } from 'react'

const LevelFilter = ({ filtersInputs, setFiltersInputs }) => {

    const [level, setLevel] = useState("")

    useEffect(() => {
        setLevel(filtersInputs.level);
    }, [filtersInputs])

    const handleChange = (event) => {
        const { value } = event.target
        setFiltersInputs({ ...filtersInputs, level: value })
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="level-input">Level</InputLabel>
            <Select
                labelId="level"
                value={level}
                id="level-input-label"
                label="Level"
                onChange={handleChange}
            >
                <MenuItem value={1}>Beginner</MenuItem>
                <MenuItem value={2}>Intermediate</MenuItem>
                <MenuItem value={3}>Advanced</MenuItem>
            </Select>
        </FormControl>
    )
}

export default LevelFilter