import React, { createContext, useState ,useContext} from 'react'
import VvdExamInfo from './VvdExamInfo';
import VvdExamContext from './VvdExamContext';
export const themeContext= createContext();

export default function VvdExampleContext() {
    const [theme,setTheme]=useState('dark');// class của bootraps
    const hangdleToggleTheme=()=>{
        setTheme(theme=='bg-dark'?'bg-dark':'bg-dark')
    }
  return (
    <div>
    <themeContext.Provider value={theme}>
      <div className='bg-danger'>
      nội dung test.bg.dark
      </div>
        <div>
            <button onClick={hangdleToggleTheme}>Change theme</button>
            <button>test</button>
        </div>
        <VvdExamContext/>
    </themeContext.Provider>
    </div>
  )
}
