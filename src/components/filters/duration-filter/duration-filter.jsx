import './duration-filter.css'
import { FormControl, InputLabel, Select, MenuItem, Slider } from '@mui/material'
import { useState } from 'react'

function valueLabelFormat(value) {
    return `${value}m`;
}

const DurationFilter = ({ filtersInputs, setFiltersInputs }) => {

    const [timeValue, settimeValue] = useState([5, 45])
    const minDistance = 10

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return
        }

        if (activeThumb === 0) {
            settimeValue([Math.min(newValue[0], timeValue[1] - minDistance), timeValue[1]])
            setFiltersInputs({ ...filtersInputs, duration: [Math.min(newValue[0], timeValue[1] - minDistance), timeValue[1]] })
        } else {
            settimeValue([timeValue[0], Math.max(newValue[1], timeValue[0] + minDistance)])
            setFiltersInputs({ ...filtersInputs, duration: [timeValue[0], Math.max(newValue[1], timeValue[0] + minDistance)] })
        }
    }

    return (
        <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={timeValue}
            valueLabelDisplay="on"
            disableSwap
            min={5}
            max={80}
            step={5}
            onChange={handleChange1}
            valueLabelFormat={valueLabelFormat}
        />
    )
}

export default DurationFilter