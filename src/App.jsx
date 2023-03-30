import { useState } from 'react'
import { useSelector } from 'react-redux'

import './App.css'
import InputPage from './components/input/inputPage'
import Table from './components/table/table'

function App() {

  let start = useSelector(state=>state.input.start)

  return (
    <div className="App">
    <InputPage />
    {start && <Table />}
    </div>
  )
}

export default App
