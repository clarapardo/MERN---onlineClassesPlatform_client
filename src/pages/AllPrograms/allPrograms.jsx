import './allPrograms.css'
import { Grid, Container } from '@mui/material'
import ObjFilter from '../../components/filters/obj-filter/obj-filter'
import LevelFilter from '../../components/filters/level-filter/level-filter'
import DurationFilter from '../../components/filters/duration-filter/duration-filter'
import StyleFilter from '../../components/filters/style-filter/style-filter'
import IntensityFilter from '../../components/filters/intensity-filter/intensity-filer'


const AllPrograms = () => {

    return (
        <div className="AllPrograms">
            <h1>HELLO</h1>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <Container>
                        <h2>Barra buscadora</h2>
                        <p>Reset filters</p>
                        <ObjFilter></ObjFilter>
                        <LevelFilter></LevelFilter>
                        <DurationFilter></DurationFilter>
                        <StyleFilter></StyleFilter>
                        <IntensityFilter></IntensityFilter>
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