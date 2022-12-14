import './allPrograms.css'
import './../../components/filters/filter.css'
import { Grid, Container } from '@mui/material'
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


    useEffect((() => {
        handleInputsChange()
    }), [filtersInputs])

    useEffect((() => {
        handleSearch()
    }), [classes, searchBarValue])


    const handleInputsChange = () => {
        classService
            .getAllClasses(filtersInputs)
            .then(({ data }) => setClasses(data))
            .catch(err => console.log(err))
    }

    const handleSearch = () => {
        if (searchBarValue !== '') {
            const classesSearch = classes.filter(elm => elm.name.toLowerCase().includes(searchBarValue.toLowerCase()))
            setClassesCopy(classesSearch)
        } else {
            setClassesCopy(classes)
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
                        <p>Sort by: recommended &gt;</p>
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