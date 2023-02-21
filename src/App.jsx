import React, {useEffect, useState} from 'react'
import CharacterList from './components/CharacterList'

function App() {
  return (
    <div className='text-white p-10 max-[600px]:p-5'>
      <h1 className='text-center text-4xl'>Rick And Morty</h1>
      <div>
        <CharacterList />
      </div>
    </div>
  )
}

export default App
