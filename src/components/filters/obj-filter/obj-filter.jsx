import './obj-filter.css'
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, Chip, Box } from '@mui/material'
import { useState } from 'react'


const objectives = [
    'Lose weight',
    'Gain flexibility',
    'Get strong',
    'Relaxation',
]

const ObjFilter = () => {

    const [objective, setObjectives] = useState([]);

    const handleChange = (event) => {
        const { value } = event.target
        setObjectives(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="objective-input">Objective</InputLabel>
            <Select
                labelId="objective"
                id="objective-input-label"
                multiple
                value={objective}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                label="Objective"
                onChange={handleChange}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
            >
                {objectives.map((elm) => (
                    <MenuItem key={elm} value={elm}>{elm}</MenuItem>
                ))}
            </Select>
        </FormControl >
    )
}

export default ObjFilter