import './allPrograms.css'
import './../../components/filters/filter.css'
import { Grid, Container, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { useState, useEffect } from 'react'

import ObjFilter from '../../components/filters/obj-filter/obj-filter'
import LevelFilter from '../../components/filters/level-filter/level-filter'
import DurationFilter from '../../components/filters/duration-filter/duration-filter'
import StyleFilter from '../../components/filters/style-filter/style-filter'
import IntensityFilter from '../../components/filters/intensity-filter/intensity-filer'
import CardItem from '../../components/card/card'
import SearchBar from '../../components/searchBar/searchBar'

import classService from '../../services/class.service'



const AllPrograms = () => {

    const initialState = {
        objective: [],
        level: "",
        duration: [5, 80],
        style: "",
        intensity: ""
    }

    const [filtersInputs, setFiltersInputs] = useState(initialState)
    const [classes, setClasses] = useState([])
    const [classesCopy, setClassesCopy] = useState([])
    const [searchBarValue, setSerchBarValue] = useState('')
    const [sortBy, setSortBy] = useState(1)


    useEffect((() => {
        handleInputsChange()
    }), [filtersInputs])

    useEffect((() => {
        handleSearch()
    }), [classes, searchBarValue])

    useEffect((() => {
        handleSortBy()
    }), [classesCopy])


    const handleInputsChange = () => {
        classService
            .getAllClasses(filtersInputs)
            .then(({ data }) => setClasses(data))
            .catch(err => console.log(err))
    }

    const handleSearch = () => {
        if (searchBarValue !== '') {
            const classesSearch = classes.filter(elm => elm.name.toLowerCase().includes(searchBarValue.toLowerCase()))
            setSortBy(1)
            setClassesCopy(classesSearch)
        } else {
            setSortBy(1)
            setClassesCopy(classes)
        }
    }

    const handleSortBy = (event) => {
        let auxValue
        if (!event) {
            auxValue = sortBy
        } else {
            auxValue = event.target.value
            setSortBy(event.target.value)
        }

        if (auxValue === 1) {
            // recomended
            classesCopy.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
        } else if (auxValue === 2) {
            // lenght
            classesCopy.sort((a, b) => b.duration - a.duration)
        } else if (auxValue === 3) {
            // newest
            classesCopy.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
        } else if (auxValue === 4) {
            // alphabetically
            classesCopy.sort((a, b) => a.name.localeCompare(b.name))
        }
    }

    const resetState = () => setFiltersInputs(initialState)

    return (
        <div className="AllPrograms">
            <Grid container spacing={2}>
                <Grid md={3} lg={3} xl={2}>
                    <Container style={{ textAlign: "center" }}>
                        <img src="https://res.cloudinary.com/clarapardo/image/upload/v1670687802/asanaGroove_mmtnvr.png" className='logo' />
                        <SearchBar setSerchBarValue={setSerchBarValue}></SearchBar>
                        <p onClick={resetState} className="reset-filters">Reset filters</p>

                        <section className='filters-container'>
                            <ObjFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></ObjFilter>
                            <LevelFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></LevelFilter>
                            <DurationFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></DurationFilter>
                            <StyleFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></StyleFilter>
                            <IntensityFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></IntensityFilter>
                        </section>
                    </Container>
                </Grid>
                <Grid md={9} lg={9} xl={10}>
                    <h1 className='header-title'>ALL PROGRAMS</h1>
                    <p className='header-subtitle'>Choose your goal, level, type of yoga, duration and intensity.</p>
                    <div className='search-results-header'>
                        <p>Showing {classesCopy.length} programs</p>
                        <p>Sort by: </p>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="sortBy-dropdown">
                            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                            <Select labelId="sortBy" id="sortBy" value={sortBy} onChange={handleSortBy} label="sortBy">
                                <MenuItem value={1}>recommended</MenuItem>
                                <MenuItem value={2}>lenght</MenuItem>
                                <MenuItem value={3}>newest</MenuItem>
                                <MenuItem value={4}>name</MenuItem>
                            </Select>
                        </FormControl>


                    </div>
                    <Grid container>
                        {classesCopy.map(elm => <Grid xs={3} key={`${elm._id}`} > <CardItem data={elm}></CardItem></Grid>)}
                    </Grid>
                </Grid>
            </Grid>

        </div >
    )
}


export default AllPrograms