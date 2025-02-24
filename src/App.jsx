import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { layout } from './component/layout'

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;