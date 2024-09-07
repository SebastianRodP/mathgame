import { Routes, Route } from 'react-router-dom'
import Prueba from './pruebas'

function App() {

  return (
      <Routes>
        <Route path='/prueba' element={<Prueba />} />
      </Routes>
  )
}

export default App
