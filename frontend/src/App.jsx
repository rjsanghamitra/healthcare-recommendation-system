import Result from './Doctors'
import HomePage from './HomePage'
import SymptomPage from './SymptomsPage'
import { useMediaQuery } from '@mui/material'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 

function App() {
  const isNonMobileScreen = useMediaQuery("(min-width:800px)")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/symptoms' element={<SymptomPage />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
