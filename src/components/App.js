import React from 'react'
import AutoComplete from './AutoComplete'

const App = () => {
  return (
    <div className='app'>
          <AutoComplete suggestions={["Delhi", "Mumbai", "Bangalore" ,"Navi Mumbai" ,"Pune"]} />
    </div>
  )
}

export default App
