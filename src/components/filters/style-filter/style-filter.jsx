import './style-filter.css'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

const styles = [
    'All',
    'Ashtanga',
    'Facial',
    'Hatha',
    'Integral',
    'Iyengar',
    'Jivamukti',
    'Meditation',
    'Power',
    'Philosophy',
    'Pregnant',
    'Rocket',
    'Vinyasa',
    'Yin'
]

const StyleFilter = ({ filtersInputs, setFiltersInputs }) => {

    const [style, setStyle] = useState("")

    const handleChange = (event) => {
        const { value } = event.target
        setStyle(value)
        setFiltersInputs({ ...filtersInputs, style: value })
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="style-input">Style</InputLabel>
            <Select
                labelId="style"
                id="style-input-label"
                label="Style"
                value={style}
                onChange={handleChange}
            >
                {styles.map(elm => <MenuItem value={elm} key={elm}>{elm}</MenuItem>)}
                {/* <MenuItem value="All">All</MenuItem>
                <MenuItem value="Ashtanga">Ashtanga</MenuItem>
                <MenuItem value="Facial">Facial</MenuItem>
                <MenuItem value="Hatha">Hatha</MenuItem>
                <MenuItem value="Integral">Integral</MenuItem>
                <MenuItem value="Iyengar">Iyengar</MenuItem>
                <MenuItem value="Jivamukti">Jivamukti</MenuItem>
                <MenuItem value="Meditation">Meditation</MenuItem>
                <MenuItem value="Power">Power</MenuItem>
                <MenuItem value="Philosophy">Philosophy</MenuItem>
                <MenuItem value="Pregnant">Pregnant</MenuItem>
                <MenuItem value="Rocket">Rocket</MenuItem>
                <MenuItem value="Vinyasa">Vinyasa</MenuItem>
                <MenuItem value="Yin">Yin</MenuItem> */}
            </Select>
        </FormControl>
    )
}

export default StyleFilter