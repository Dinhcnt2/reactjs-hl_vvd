import React from 'react'
import VvdUseState from './components/VvdUseState'
import VvdListStudent from './components/VvdListStudent'

export default function App() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Vương Văn Định]</h1>
        <hr/>

        <VvdUseState />

        <VvdListStudent />
    </div>
  )
}