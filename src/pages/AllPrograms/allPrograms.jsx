import './allPrograms.css'
import { Grid, Container } from '@mui/material'
import { useState, useEffect } from 'react'

import ObjFilter from '../../components/filters/obj-filter/obj-filter'
import LevelFilter from '../../components/filters/level-filter/level-filter'
import DurationFilter from '../../components/filters/duration-filter/duration-filter'
import StyleFilter from '../../components/filters/style-filter/style-filter'
import IntensityFilter from '../../components/filters/intensity-filter/intensity-filer'
import CardItem from '../../components/card/card'
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
    const [classes, setClasses] = useState([]);

    useEffect((() => {
        handleSearchChange()
    }), [filtersInputs])

    const handleSearchChange = () => {
        classService
            .getAllClasses(filtersInputs)
            .then(({ data }) => setClasses(data))
            .catch(err => console.log(err))
    }

    const resetState = () => setFiltersInputs(initialState)

    return (
        <div className="AllPrograms">
            <h1>HELLO</h1>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <Container>
                        <h2>Barra buscadora</h2>
                        <p onClick={resetState}>Reset filters</p>

                        <section className='filters-container'>
                            <ObjFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></ObjFilter>
                            <LevelFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></LevelFilter>
                            <DurationFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></DurationFilter>
                            <StyleFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></StyleFilter>
                            <IntensityFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></IntensityFilter>
                        </section>
                    </Container>
                </Grid>
                <Grid xs={9}>
                    <div className='search-results-header'>
                        <p>Mostrando {classes.length} programas</p>
                        <p>Ordenar por: recomendado &gt;</p>
                    </div>
                    {classes.map(elm => <CardItem data={elm}></CardItem>)}
                </Grid>
            </Grid>

        </div>
    )
}


export default AllPrograms