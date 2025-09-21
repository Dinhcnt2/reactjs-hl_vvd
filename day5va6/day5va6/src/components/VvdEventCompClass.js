import React, { Component } from 'react';

class VvdEventCompClass extends Component {

    Vvd_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    Vvd_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.Vvd_Func1}>Click</button>
                <button onClick={()=>this.Vvd_Func2("Định koy")}>Click Param</button>
            </div>
        );
    }
}

export default VvdEventCompClass;