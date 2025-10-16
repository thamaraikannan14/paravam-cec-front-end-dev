import React from 'react'
import Button from './components/Button'
import Form from './components/Form'
import Ordered from './components/Ordered'
import Unordered from './components/Unordered'

export default function App() {
  return (
    <div>
      < Form  text={"hello"}  value={12} arr={[1,2,3,3,4]}/>
      < Button />
      < Ordered />
      < Unordered />
    </div>
  )
}
