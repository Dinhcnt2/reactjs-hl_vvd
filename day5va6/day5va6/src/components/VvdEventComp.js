import React from 'react'

export default function VvdEventComp() {

    const Vvd_Func1 = ()=>{
        alert("Xin chào")
    }
    const Vvd_Func2 = (param)=>{
        alert(param)
    }
    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={Vvd_Func1}>Click Here</button>
            
            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={tvc_Func1()}>Click Here</button>ss */}

            {/* gọi hàm có tham số */}
            <button onClick={()=>Vvd_Func2('Vương Định')}>Click Here Param</button>

        </div>
    )
}