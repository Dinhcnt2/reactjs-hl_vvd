import React, { Component } from 'react';
import VvdFuncComp from './components/VvdFuncComp';
import VvdClassComp from './components/VvdClassComp';
import VvdRenderList from './components/VvdRenderList';
import VvdListStudent from './components/VvdListStudent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
            students: [
                { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
                { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: true },
                { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", isActive: false },
                { id: 4, name: "Phạm Thị D", age: 19, gender: "Nữ", isActive: true },
                { id: 5, name: "Hoàng Văn E", age: 23, gender: "Nam", isActive: false }
            ],
        }
  }
  render() {
    return (
      <div className='container border'>
        <h1>Vương Văn Định</h1>
        <h2>Ôn tập: conponent / props / state / Render ListKey</h2>
        <hr/>
        <VvdFuncComp />
        <hr/>
        <VvdFuncComp fullName="Vương Vương" address="FitNTU" email="hi@gmail.com"></VvdFuncComp>

        <VvdClassComp />
        <VvdClassComp name="Định" age="47" phone = "0976067728" email="hi@gmaill.com"></VvdClassComp>

        <hr/>
        <VvdRenderList />
        <hr/>
        <VvdListStudent students = {this.state.students} />
      </div>
    );
  }
}

export default App