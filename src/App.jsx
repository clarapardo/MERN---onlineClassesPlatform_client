import './App.jsx'
import ObjFilter from './components/filters/obj-filter/obj-filter.jsx'
import LevelFilter from './components/filters/level-filter/level-filter.jsx'
import DurationFilter from './components/filters/duration-filter/duration-filter.jsx'
import StyleFilter from './components/filters/style-filter/style-filter.jsx'
import IntensityFilter from './components/filters/intensity-filter/intensity-filer.jsx'

function App() {

  return (
    <div className="App">
      <ObjFilter></ObjFilter>
      <LevelFilter></LevelFilter>
      <DurationFilter></DurationFilter>
      <StyleFilter></StyleFilter>
      <IntensityFilter></IntensityFilter>
    </div>
  )
}

export default App
