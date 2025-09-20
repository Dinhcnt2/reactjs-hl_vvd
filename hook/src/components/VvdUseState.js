import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // Handler phải ở đây, trong scope của component
  const HandleTang = () => {
    setCount(prev => prev + 1);
  };

  const HandleGiam = () => {
    setCount(prev => prev - 1);
  };
// sử dụng với mảng 
const danh_sach=[1,2,5,3]
const [list , setList]= useState(danh_sach)
const HandleAddList=()=>{
    //tạo số ngẫu nhiên
    const randomNumber= Math.floor(Math.random()*100)+1;
    setList([...list,randomNumber]);
}
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={HandleTang}>tăng</button>
      <button onClick={HandleGiam}>giảm</button>
      <hr/>
      <h3>list:{list.toString()}</h3>
      <button onClick={HandleAddList}>add</button>
    </div>
  );
}
