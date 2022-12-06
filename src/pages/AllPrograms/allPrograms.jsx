import './allPrograms.css'
import { Grid, Container } from '@mui/material'
import ObjFilter from '../../components/filters/obj-filter/obj-filter'
import LevelFilter from '../../components/filters/level-filter/level-filter'
import DurationFilter from '../../components/filters/duration-filter/duration-filter'
import StyleFilter from '../../components/filters/style-filter/style-filter'
import IntensityFilter from '../../components/filters/intensity-filter/intensity-filer'
import { useState } from 'react'



const AllPrograms = () => {

    const [filtersInputs, setFiltersInputs] = useState({
        objective: "",
        level: "",
        duration: [5, 45],
        style: "All",
        intensity: ""
    })

    const handleSearchChange = () => {
        // Llama al servicio! :))) Promises <3
    }

    const resetState = () => {
        setFiltersInputs({
            objective: "",
            level: "",
            duration: [5, 45],
            style: "All",
            intensity: ""
        })
        // Aqui hay que limpiar los campos de los filtros :S
    }

    return (
        <div className="AllPrograms">
            <h1>HELLO</h1>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <Container>
                        <h2>Barra buscadora</h2>
                        <p onClick={resetState}>Reset filters</p>
                        <ObjFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></ObjFilter>
                        <LevelFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></LevelFilter>
                        <DurationFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></DurationFilter>
                        <StyleFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></StyleFilter>
                        <IntensityFilter filtersInputs={filtersInputs} setFiltersInputs={setFiltersInputs}></IntensityFilter>
                    </Container>
                </Grid>
                <Grid xs={9}>
                    {/* <Item>xs=8</Item> */}
                </Grid>
            </Grid>

        </div>
    )
}


export default AllPrograms