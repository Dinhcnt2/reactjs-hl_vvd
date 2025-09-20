import React, { useContext, useEffect, useState } from 'react'
import VvdExamInfo from './VvdExamInfo'
import { themeContext } from './VvdExampleContext';
export default function VvdExamContext() {
    let theme=useContext(themeContext);
   
  return (
    <div>
        <p className={theme}>
            áp dụng
            <br/>
            <span className={theme}>
            useContext là 1 hook cho phép truy cập dữ liệu từ 1 Context mà không cần phải truyền props qua nhiều cấp (tránh tình trạng props drilling) .
            </span>
        </p>
        <VvdExamInfo/>
    </div>
  )
}
