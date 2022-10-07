import { useState } from 'react'
import { Select } from "./Select"

const options = [
  {
    label: "First", 
    value: 1
  },
  {
    label: "Second",
    value: 2
  },
  {
    label: "Third",
    value: 3
  },
  {  
    label: "fourth",
    value: 4
  },
  {
    label: "fifth",
    value: 5
  },  
]

function App() {

  return (
    <>
      <Select options={options}/>
    </>
  )
}

export default App
