import React, { useEffect, useState } from 'react'

export default function VvduseEffect() {
    //use effect- không có tham số thứ 2 
    useEffect(()=>{
        console.log("useEffect:(()=>{...}): gọi callback khi đang render");
    })
    //[]
    useEffect(()=>{
        console.log("useEffect:(()=>{...}): gọi callback một lần duy nhất");
    },[])
    //[count]
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useEffect:(()=>{...},["+count+"]): gọi callback mỗi khi count thay đổi",count);
    },[count])
  return (
    <div>
        <h2>useEffect-demo-count:{count}</h2>
<br/>
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
