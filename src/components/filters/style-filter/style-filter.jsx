import './style-filter.css'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const StyleFilter = () => {

    return (
        <FormControl fullWidth>
            <InputLabel id="style-input">Style</InputLabel>
            <Select
                labelId="style"
                id="style-input-label"
                label="Style"
            // onChange={handleChange}
            >
                <MenuItem value={1}>Ashtanga</MenuItem>
                <MenuItem value={2}>Facial</MenuItem>
                <MenuItem value={3}>Hatha</MenuItem>
                <MenuItem value={4}>Integral</MenuItem>
                <MenuItem value={5}>Iyengar</MenuItem>
                <MenuItem value={6}>Jivamukti</MenuItem>
                <MenuItem value={7}>Meditation</MenuItem>
                <MenuItem value={8}>Power</MenuItem>
                <MenuItem value={9}>Philosophy</MenuItem>
                <MenuItem value={10}>Pregnant</MenuItem>
                <MenuItem value={11}>Rocket</MenuItem>
                <MenuItem value={12}>Vinyasa</MenuItem>
                <MenuItem value={13}>Yin</MenuItem>
            </Select>
        </FormControl>
    )
}

export default StyleFilter