import './intensity-filter.css'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'

const IntensityFilter = ({ filtersInputs, setFiltersInputs }) => {

    const [intensity, setIntensity] = useState("")

    const handleChange = (event) => {
        const { value } = event.target
        // setIntensity(value)
        setFiltersInputs({ ...filtersInputs, intensity: value })
    }

    useEffect(() => {
        setIntensity(filtersInputs.intensity);
    }, [filtersInputs])

    return (
        <FormControl fullWidth>
            <InputLabel id="intensity-input">Intensity</InputLabel>
            <Select
                labelId="intensity"
                id="intensity-input-label"
                label="intensity"
                value={intensity}
                onChange={handleChange}
            >
                <MenuItem value="L">Low</MenuItem>
                <MenuItem value="M">Medium</MenuItem>
                <MenuItem value="H">High</MenuItem>
            </Select>
        </FormControl>
    )
}

export default IntensityFilter