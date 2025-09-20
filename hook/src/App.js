  import React from 'react'
import VvdUseState from './components/VvdUseState'
import VvdListStudent from './components/VvdListStudent'
import VvduseEffect from './components/VvduseEffect'
import VvdExamContext from './components/VvdExamContext'
import VvdExampleContext from './components/VvdExampleContext'
  
  export default function App() {
    return (
      <div>
        <h1>react hook vương định</h1>
        <hr/>
        <VvdUseState/>
        <VvdListStudent/>
        <VvduseEffect/>
        <VvdExampleContext/>
      </div>
    )
  }
  